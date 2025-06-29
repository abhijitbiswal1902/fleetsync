import React, { useEffect, useState } from 'react';
import './CostAnalysis.css';  // Importing the CSS file

function CostAnalysis() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8001';
    fetch(API_BASE_URL + '/api/fleet/cost-analysis')
      .then(res => res.json())
      .then(setData);
  }, []);

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
            {data.map((row, idx) => (
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
