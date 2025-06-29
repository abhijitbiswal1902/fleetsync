import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';  // Assuming you have a CSS file for styling

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleGetStarted = () => {
    if (location.pathname === '/') {
      // If on home page, scroll to features section
      const featuresSection = document.querySelector('.features');
      if (featuresSection) {
        const navbarHeight = 80; // Approximate navbar height
        const elementPosition = featuresSection.offsetTop - navbarHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // If on other pages, navigate to home and scroll to features
      navigate('/');
      setTimeout(() => {
        const featuresSection = document.querySelector('.features');
        if (featuresSection) {
          const navbarHeight = 80; // Approximate navbar height
          const elementPosition = featuresSection.offsetTop - navbarHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  const handleAboutUs = () => {
    if (location.pathname === '/') {
      // If on home page, scroll to about us section
      const aboutUsSection = document.querySelector('.about-us');
      if (aboutUsSection) {
        const navbarHeight = 80; // Approximate navbar height
        const elementPosition = aboutUsSection.offsetTop - navbarHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // If on other pages, navigate to home and scroll to about us
      navigate('/');
      setTimeout(() => {
        const aboutUsSection = document.querySelector('.about-us');
        if (aboutUsSection) {
          const navbarHeight = 80; // Approximate navbar height
          const elementPosition = aboutUsSection.offsetTop - navbarHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  const handleFeaturesScroll = () => {
    if (location.pathname === '/') {
      // If on home page, scroll to features section
      const featuresSection = document.querySelector('.features');
      if (featuresSection) {
        const navbarHeight = 80; // Approximate navbar height
        const elementPosition = featuresSection.offsetTop - navbarHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // If on other pages, navigate to home and scroll to features
      navigate('/');
      setTimeout(() => {
        const featuresSection = document.querySelector('.features');
        if (featuresSection) {
          const navbarHeight = 80; // Approximate navbar height
          const elementPosition = featuresSection.offsetTop - navbarHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>FleetSync</h1>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <Link to="/products" className="nav-link">Products</Link>
          <div className="dropdown-menu">
            <Link to="/realtime-tracking" className="dropdown-item">Truck Tracker</Link>
            <Link to="/analytics-and-reports" className="dropdown-item">Analytics Dashboard</Link>
            <Link to="/route-optimization" className="dropdown-item">Route Optimizer</Link>
          </div>
        </li>
        <li className="nav-item">
          <button onClick={handleFeaturesScroll} className="nav-link">Solutions</button>
        </li>
        <li className="nav-item">
          <button onClick={handleFeaturesScroll} className="nav-link">Resources</button>
        </li>
        <li className="nav-item">
          <button onClick={handleAboutUs} className="nav-link">About Us</button>
        </li>
        <li className="nav-item">
          <button onClick={handleFeaturesScroll} className="nav-link">Customers</button>
        </li>
        <li className="nav-item">
          <a href="mailto:abhijitbiswal1902@gmail.com" className="nav-link">Contact</a>
        </li>
        <li className="nav-item">
          {user ? (
            <button onClick={handleLogout} className="nav-link logout-btn">Logout</button>
          ) : (
            <Link to="/login" className="nav-link">Login</Link>
          )}
        </li>
        <li className="nav-item">
          <button onClick={handleGetStarted} className="nav-link cta-button">Get Started</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
