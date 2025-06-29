import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import './signin-signup.css';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8001';
      const res = await axios.post(API_BASE_URL + '/api/users/register', formData, {
        withCredentials: true,
      });
      
      // Save user data and redirect
      login({
        email: formData.email,
        username: formData.username,
        token: res.data.token,
        ...res.data.user
      });
      
      alert('Signup successful!');
      navigate('/');
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          placeholder="Username"
          onChange={handleChange}
          required
          disabled={loading}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
          disabled={loading}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Creating account...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
