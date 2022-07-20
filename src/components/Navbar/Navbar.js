import { signOut } from 'firebase/auth';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

function CollapsibleExample() {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  const handleSignOut =()=>{
    signOut(auth);
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Diary</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="#features">Features</Nav.Link>
            {
              user ? <Nav.Link as={Link} to="/new-post">Create a Post</Nav.Link> : <></>
            }
            
          </Nav>
          <Nav>
            {
              !user? <Nav.Link as={Link} to="/login">Login</Nav.Link> : <Nav.Link onClick={handleSignOut}  >Logout</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;