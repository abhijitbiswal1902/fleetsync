import React, { useEffect, useState } from 'react';
import './FleetReport.css';

function FleetReport() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8001';
    fetch(API_BASE_URL + '/api/performance')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(setData)
      .catch(err => {
        console.error('Fetch error:', err);
        setError('Failed to load fleet performance data.');
      });
  }, []);

  return (
    <div className="fleet-container">
      <div className="table-wrapper">
        <h2 className="heading">📈 Fleet Performance Report</h2>
        {error ? (
          <p className="error">{error}</p>
        ) : data.length === 0 ? (
          <p className="loading">Loading data...</p>
        ) : (
          <table className="fleet-table">
            <thead>
              <tr>
                <th>Vehicle</th>
                <th>From → To</th>
                <th>Distance</th>
                <th>Fuel Cost</th>
                <th>Toll Cost</th>
                <th>Driver Expense</th>
                <th>Revenue</th>
                <th>Total Cost</th>
                <th>Profit</th>
                <th>Profit %</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.vehicle}</td>
                  <td>{row.from} → {row.to}</td>
                  <td>{row.distance}</td>
                  <td>{row.fuelCost}</td>
                  <td>{row.tollCost}</td>
                  <td>{row.driverExpense}</td>
                  <td>{row.revenue}</td>
                  <td>{row.totalCost}</td>
                  <td>{row.profit}</td>
                  <td>{row.profitPercent?.toFixed(2)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default FleetReport;
