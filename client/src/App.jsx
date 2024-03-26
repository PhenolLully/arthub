import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet } from 'react-router-dom'; // Import the Outlet component
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/client';
function App() {
  


  return (
    <ApolloProvider client={{client}}>
      <Navbar bg="dark" variant="dark" className="text-center">
        <Container>
          <Navbar.Brand>ArtHub</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href = "/">Home</Nav.Link>
            <Nav.Link href = "/pages">Profile</Nav.Link>
            <Nav.Link href = "/post">Create a Post</Nav.Link>
            <Nav.Link href = "/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Outlet />

      <footer>
        {/* Add your footer content here */}
      </footer>

</ApolloProvider>
  );
}

export default App;