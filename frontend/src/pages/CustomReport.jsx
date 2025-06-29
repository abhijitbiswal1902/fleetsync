import React, { useEffect, useState, useCallback } from 'react';
import './CustomReport.css';  // Importing the CSS file

function CustomReport() {
  const [data, setData] = useState([]);
  const [vehicle, setVehicle] = useState('');

  const fetchData = useCallback(() => {
    let query = [];
    if (vehicle) query.push(`vehicle=${vehicle}`);
    const queryString = query.length ? '?' + query.join('&') : '';

    const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8001';
    fetch(API_BASE_URL + '/api/fleet/custom' + queryString)
      .then(res => res.json())
      .then(setData);
  }, [vehicle]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);  // Now includes fetchData dependency

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
            {data.map((row, idx) => (
              <tr key={idx}>
                <td>{row.from} → {row.to}</td>
                <td>{row.vehicle}</td>
                <td>{row.totalCost}</td>
                <td>{row.revenue}</td>
                <td>{row.profit}</td>
                <td>{row.profitPercent.toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomReport;
