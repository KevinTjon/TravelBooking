// src/components/LoginPage/LoginForm.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., API call)
    console.log('Logging in with:', username, password);
  };

  return (
    <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username or Email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username or email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100 mt-3">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
