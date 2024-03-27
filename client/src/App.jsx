import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { Outlet } from 'react-router-dom'; // Import the Outlet component
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


import { Link } from 'react-router-dom';

import auth from './utils/auth'

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {



  return (
    <ApolloProvider client={client}>
      <Navbar bg="dark" variant="dark" className="text-center">
        <Container>
          <Navbar.Brand><Nav.Link href="/">ArtHub</Nav.Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/pages">Profile</Nav.Link>
            <Nav.Link href="/post">Create a Post</Nav.Link>
            {auth.loggedIn() ? (<Nav.Link onClick={auth.logout} >Logout</Nav.Link>) : (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
              </>
            )}

            <Nav.Link href="/donate">Support Our Website!</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="post-btn-container">
        <MDBBtn
          size='lg'
          floating
          style={{ backgroundColor: '#ac2bac', boxShadow: 'none', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center', disableRipple: true }}
          href='#'
        >
          <MDBIcon fab icon='instagram' />

          <Link to="/post">
            <span className="plus-sign">+</span>
          </Link>

        </MDBBtn>
      </div>
      <Outlet />

      <footer>
       {/*<p style={{color: 'black', marginTop:'80px'}}>&copy; Best Group 2024</p>*/}
      </footer>

    </ApolloProvider>
  );
}

export default App;