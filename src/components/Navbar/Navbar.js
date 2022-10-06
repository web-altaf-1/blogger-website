import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import NavMenu from '../NavMenu/NavMenu';

function CollapsibleExample() {
  const [user] = useAuthState(auth);

  const notUser = () => {
    toast.error('User must be login to create a post')
  }

  return (
    <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">BlogBd</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            {
              user ? <Nav.Link as={Link} to="/new-post">Create a Post</Nav.Link> : <Nav.Link onClick={notUser} as={Link} to="/new-post">Create a Post </Nav.Link>

            }
            {
              user?.email === 'web.altaf.1@gmail.com' ? <Nav.Link as={Link} to="/admin-panel">Admin Panel</Nav.Link> : <></>
            }
            {
              user?.email === 'admin@altaf.com' ? <Nav.Link as={Link} to="/admin-panel">Admin Panel</Nav.Link> : <></>
            }
            
            {
              user?.email === 'admin@samia.com' ? <Nav.Link as={Link} to="/admin-panel">Admin Panel</Nav.Link> : <></>
            }

          </Nav>
          <Nav>
            {
              !user ? <Nav.Link as={Link} to="/login">Login</Nav.Link> : <></>
            }
          </Nav>
          <Nav>
            {user ? <NavMenu></NavMenu> : <></>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;