import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations'; 
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert, Container } from 'react-bootstrap';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [login, { loading, error }] = useMutation(LOGIN, {
    onCompleted: (data) => {
      localStorage.setItem('token', data.login.token); 
      navigate('/profile'); 
    },
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login({ variables: { email, password } });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container style={{ maxWidth: '500px', marginTop: '20px' }}>
      <h2>Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={loading}>
          Login
        </Button>
        {error && <Alert variant="danger" className="mt-3">{error.message}</Alert>}
      </Form>
    </Container>
  );
};

export default LoginPage;
