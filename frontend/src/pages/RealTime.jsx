import React, { useEffect, useState } from 'react';
import './RealTime.css'; // Ensure this CSS file is in the same folder or adjust the path

function RealTime() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8001';
    fetch(API_BASE_URL + '/api/fleet/real-time')
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error("Error fetching real-time data:", err));
  }, []);

  return (
    <div className="realtime-container">
      <div className="table-wrapper">
        <h2 text-color='white' className="heading">🔹 Real-Time Fleet Data</h2>
        <table className="fleet-table">
          <thead>
            <tr>
              <th>From → To</th>
              <th>Vehicle</th>
              <th>Fuel Cost</th>
              <th>Toll Cost</th>
              <th>Driver Expense</th>
              <th>Revenue</th>
              <th>Total Cost</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="7">Loading data...</td>
              </tr>
            ) : (
              data.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.from} → {row.to}</td>
                  <td>{row.vehicle}</td>
                  <td>₹{row.fuelCost}</td>
                  <td>₹{row.tollCost}</td>
                  <td>₹{row.driverExpense}</td>
                  <td>₹{row.revenue}</td>
                  <td>₹{row.totalCost}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RealTime;
