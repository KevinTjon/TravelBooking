// src/components/RegisterPage/RegisterPage.js
import React from 'react';
import RegisterForm from './RegisterForm';
import './styles.css';

const RegisterPage = () => {
  return (
    <div className="register-page">
      <div className="register-container">
        <h2 className="text-center mb-4">Create an Account</h2>
        <RegisterForm />
        <p className="mt-3 text-center">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
