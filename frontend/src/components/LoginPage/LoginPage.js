// src/components/LoginPage/LoginPage.js
import React from 'react';
import LoginForm from './LoginForm';
import './styles.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="text-center mb-4">Login to Your Account</h2>
        <LoginForm />
        <p className="mt-3 text-center">
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
