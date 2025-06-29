import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config/api';
import './CostAnalysis.css';  // Importing the CSS file

const CostAnalysis = () => {
  const [costData, setCostData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCostData();
  }, []);

  const fetchCostData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/fleet/costs`);
      setCostData(response.data);
    } catch (error) {
      console.error('Error fetching cost data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='page'>
    <div className="cost-container"> {/* Main wrapper for centering */}
      <div className="table-wrapper">
        <h2 className="heading">💰 Cost Analysis</h2>

        <table className="cost-table">
          <thead>
            <tr>
              <th>Route</th>
              <th>Total Cost</th>
              <th>Total Revenue</th>
              <th>Total Profit</th>
            </tr>
          </thead>
          <tbody>
            {costData.map((row, idx) => (
              <tr key={idx}>
                <td>{row.from} → {row.to}</td>
                <td>{row.totalCost}</td>
                <td>{row.totalRevenue}</td>
                <td>{row.totalProfit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default CostAnalysis;
