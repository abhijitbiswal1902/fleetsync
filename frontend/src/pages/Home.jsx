import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './HomePage.css'; // Assume styling is defined in an external CSS file.
import Navbar from './Navbar'; 

const HomePage = () => {
  const handleGetStarted = () => {
    const featuresSection = document.querySelector('.features');
    if (featuresSection) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = featuresSection.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <Navbar />
      <header className="hero">
        <div className="hero-content">
          <h1>FleetSync</h1>
          <p>Empowering the people who run the physical economy.</p>
          <p>Streamline your operations with our powerful fleet management solutions.</p>
          <button className="cta-button" onClick={handleGetStarted}>Get Started</button>
        </div>
        <div className="rightcorner-image">
          {/* <img src="/rightcorner.jpg" alt="Fleet Management" /> */}
        </div>
      </header>

      {/* New Section with Text and Video */}
      <section className="info-video-section">
        <div className="background-video-container">
          <video width='100%' autoPlay muted loop >
            <source src="bgv.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="info-video-container">
          {/* Left Side - Text */}
          <div className="info-left">
            <h2>Why Choose FleetSync?</h2>
            <p>
              FleetSync offers cutting-edge solutions to optimize fleet management. With real-time tracking, automated maintenance scheduling, and data-driven insights, we ensure your fleet runs efficiently, reduces costs, and improves productivity. Join thousands of businesses that trust FleetSync to revolutionize their fleet operations.
            </p>
          </div>
          
          {/* Right Side - Video */}
          <div className="info-right">
            <video width="100%" autoPlay loop muted>
              <source src="homevid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature feature-bg1 ">
            <h3>
              <Link to="/realtime-tracking">Real-Time Tracking</Link>
            </h3>
            <p>Monitor your fleet in real-time with GPS-enabled tracking.</p>
          </div>
          <div className="feature feature-bg2">
            <h3>
              <Link to="/analytics-and-reports">Analytics & Reports</Link>
            </h3>
            <p>Gain insights with detailed reports and analytics.</p>
          </div>
          <div className="feature feature-bg3">
            <h3>
              <Link to="/maintenance-management">Maintenance Management</Link>
            </h3>
            <p>Stay on top of vehicle maintenance schedules.</p>
          </div>
          <div className="feature feature-bg4">
            <h3>
              <Link to="/route-optimization">Route Optimization</Link>
            </h3>
            <p>Plan efficient routes to save time and fuel costs.</p>
          </div>
        </div>
      </section>

      {/* New Section with Text and Video (Two Halves) */}
      <section className="split-section">
        <div className="left-half">
          <h2>FleetSync: Customer's testimonial</h2>
          <p>
            Hear what our customers have to say
          </p>
          <p>
            Meet Charles T.A transportation company owner and hear what he has to say about FleetSync
          </p>
        </div>
        <div className="right-half">
          <video width="100%" controls>
            <source src="customer.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      {/* About Us Section */}
      <section className="about-us">
        <h2>About Us</h2>
        <div className="about-us-content">
          <div className="about-text">
            <p>
              FleetSync was founded with the mission to empower businesses with tools that help them optimize fleet operations. By combining innovative technology with real-time data, FleetSync enables organizations to track, manage, and improve the performance of their fleets. Our team of experts is committed to delivering the most comprehensive fleet management solution available.
            </p>
          </div>
          <div className="about-image">
            <img src="teadm.jpg" alt="Our Team" />
          </div>
        </div>
      </section>

      {/* Other sections remain the same... */}
    </div>
  );
};

export default HomePage;
