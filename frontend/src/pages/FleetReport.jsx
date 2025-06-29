import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config/api';
import './FleetReport.css';

const FleetReport = () => {
  const [fleetData, setFleetData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFleetData();
  }, []);

  const fetchFleetData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/fleet/reports`);
      setFleetData(response.data);
    } catch (error) {
      console.error('Error fetching fleet data:', error);
      setError('Failed to load fleet performance data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fleet-container">
      <div className="table-wrapper">
        <h2 className="heading">📈 Fleet Performance Report</h2>
        {error ? (
          <p className="error">{error}</p>
        ) : loading ? (
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
              {fleetData.map((row, idx) => (
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
};

export default FleetReport;
