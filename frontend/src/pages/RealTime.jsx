import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config/api';
import './RealTime.css'; // Ensure this CSS file is in the same folder or adjust the path

const RealTime = () => {
  const [trackingData, setTrackingData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrackingData();
    // Set up real-time updates every 5 seconds
    const interval = setInterval(fetchTrackingData, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchTrackingData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/fleet/tracking`);
      setTrackingData(response.data);
    } catch (error) {
      console.error('Error fetching tracking data:', error);
    } finally {
      setLoading(false);
    }
  };

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
            {trackingData.length === 0 ? (
              <tr>
                <td colSpan="7">Loading data...</td>
              </tr>
            ) : (
              trackingData.map((row, idx) => (
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
};

export default RealTime;
