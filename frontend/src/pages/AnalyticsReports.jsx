import React, { useEffect, useState } from 'react';
import './AnalyticsReports.css'; 
import Navbar from './Navbar';
import axios from 'axios';
import API_BASE_URL from '../config/api';

const AnalyticsReports = () => {
  const [reports, setReports] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API on component mount
  useEffect(() => {
    const fetchReports = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_BASE_URL}/api/fleet/report`);
        setReports(response.data);
      } catch (error) {
        console.error('Error fetching reports:', error);
        setError('Failed to load analytics data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="analytics-reports">
      <Navbar />
      
      {/* Hero Section */}
      <header className="reports-hero">
        <div className="hero-content">
          <h1>Analytics & Reports</h1>
          <p>Gain valuable insights into your fleet's performance with powerful analytics and reports.</p>
        </div>
        <div className="hero-image">
          {/* Add an image if needed */}
          {/* <img src="analys.jpg" alt="Analytics and Reports" /> */}
        </div>
      </header>

      {/* Features Section */}
      <section className="reports-features">
        <h2>Key Features of Analytics & Reports</h2>
        <div className="feature-list">
          <div className="feature feature-bg1">
            <a href="/real-time">
            <h3>Real-Time Data Visualization</h3></a>
            <p>Interactive dashboards to visualize fleet performance metrics in real time.</p>
          </div>
          
          <div className="feature feature-bg2">
            <a href="/fleet-report">
            <h3>Fleet Performance Reports</h3></a>
            <p>Generate detailed reports on fuel usage, speed, maintenance costs, and more.</p>
          </div>
          <div className="feature feature-bg3">
            <a href="/custom-report">
            <h4>Customizable Reports</h4></a>
            <p>Customize and export reports based on specific fleet or driver parameters.</p>
          </div>
          <div className="feature feature-bg4">
            <a href="/cost-analysis">
            <h4>Cost Analysis</h4></a>
            <p>Analyze and track costs related to fuel consumption, maintenance, and vehicle usage.</p>
          </div>
        </div>
      </section>

      {/* New Section with Text and Video */}
      <section className="info-video-section">
        <div className="info-video-container">
          {/* Left Side - Text */}
          <div className="info-left">
            <h2>How Analytics Transforms Fleet Management</h2>
            <p>
              Analytics provides actionable insights into every aspect of your fleet operations.
              From identifying inefficiencies to predicting maintenance needs, our tools
              empower you to make data-driven decisions that save time and reduce costs.
            </p>
          </div>
          
          {/* Right Side - Video */}
          <div className="info-right">
            <video width="100%" autoPlay loop muted>
              <source src="arvbg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Fleet Report Table Section - Dynamically render report data */}
      <section className="fleet-report-section">
        <h2>Fleet Performance Report</h2>
        <div className="report-table">
          {loading ? (
            <p>Loading reports...</p>
          ) : error ? (
            <p>{error}</p>
          ) : reports ? (
            <table>
              <thead>
                <tr>
                  <th>Vehicle ID</th>
                  <th>Fuel Usage</th>
                  <th>Maintenance Costs</th>
                  <th>Average Speed</th>
                  <th>Distance Covered</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report, index) => (
                  <tr key={index}>
                    <td>{report.vehicleId}</td>
                    <td>{report.fuelUsage} liters</td>
                    <td>${report.maintenanceCost}</td>
                    <td>{report.averageSpeed} km/h</td>
                    <td>{report.distanceCovered} km</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No reports found.</p>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="reports-benefits">
        <h2>Why Use Analytics & Reports?</h2>
        <ul>
          <li>Make data-driven decisions to optimize fleet performance.</li>
          <li>Reduce operational costs by identifying inefficiencies.</li>
          <li>Monitor fleet health and anticipate maintenance needs.</li>
          <li>Stay compliant with regulatory reporting requirements.</li>
        </ul>
      </section>

      {/* Call-to-Action Section */}
      <section className="reports-cta">
        <h2>Start Making Data-Driven Decisions</h2>
        <p>Unlock the power of analytics to boost the efficiency of your fleet.</p>
        <button className="cta-button">Get Started</button>
      </section>
    </div>
  );
};

export default AnalyticsReports;
