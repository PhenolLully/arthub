import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import auth from '../utils/auth'

export default function Navigation(){
    return(
        <Navbar bg="dark" variant="dark" className="text-center">
        <Container>
          <Navbar.Brand><Nav.Link href="/">ArtHub</Nav.Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {auth.loggedIn() ? (<>
              <Nav.Link href="/pages">Profile</Nav.Link>
              <Nav.Link href="/post">Create a Post</Nav.Link>            
            </>) : ''}
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
    )
}