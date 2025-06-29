import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config/api';
import './CustomReport.css';  // Importing the CSS file

const CustomReport = () => {
  const [data, setData] = useState([]);
  const [vehicle, setVehicle] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      let query = [];
      if (vehicle) query.push(`vehicle=${vehicle}`);
      const queryString = query.length ? '?' + query.join('&') : '';

      const response = await axios.get(`${API_BASE_URL}/api/fleet/custom${queryString}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching custom report data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [vehicle]);

  return (
    <div className="custom-container"> {/* Main wrapper for centering */}
      <div className="table-wrapper">
        <h2 className="heading">🚚 Custom Report</h2>

        <div className="filter-box">
          <input
            className="vehicle-input"
            placeholder="Enter Vehicle ID"
            value={vehicle}
            onChange={e => setVehicle(e.target.value)}
          />
          <button onClick={fetchData}>Filter</button>
        </div>

        <table className="fleet-table">
          <thead>
            <tr>
              <th>From → To</th>
              <th>Vehicle</th>
              <th>Total Cost</th>
              <th>Revenue</th>
              <th>Profit</th>
              <th>Profit %</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6">Loading data...</td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td colSpan="6">No data available</td>
              </tr>
            ) : (
              data.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.from} → {row.to}</td>
                  <td>{row.vehicle}</td>
                  <td>{row.totalCost}</td>
                  <td>{row.revenue}</td>
                  <td>{row.profit}</td>
                  <td>{row.profitPercent.toFixed(2)}%</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomReport;
