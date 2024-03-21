import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './components/Home/Home'; // Import the Home component
import Profile from './components/Profile/Profile'; // Import the Profile component

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home />;
      case 'profile':
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" className="text-center">
        <Container>
          <Navbar.Brand>ArtHub</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => setPage('home')}>Home</Nav.Link>
            <Nav.Link onClick={() => setPage('profile')}>Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      {renderPage()} {/* Render the current page based on the state */}
      
      <footer>
        {/* Add your footer content here */}
      </footer>
    </>
  );
}

export default App;