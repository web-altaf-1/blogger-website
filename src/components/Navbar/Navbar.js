import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import NavMenu from '../NavMenu/NavMenu';
import './Navbar.css';

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
          <Nav className="ms-auto">


          </Nav>
          <Nav>
            <Nav.Link as={Link} to='/'>প্রথম পাতা</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to='/'>ফ্রি নেট</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to='/'>প্রোগ্রামিং</Nav.Link>
          </Nav>
          {
            user && <Nav>
              <div className="dropdown">
                <button className="navbar-dashboard-button dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  ড্যাশবোর্ড
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <NavLink to='/new-post' className="dropdown-item" >New Post</NavLink>
                  <NavLink to='/admin-panel' className="dropdown-item" >Admin Panel</NavLink>


                </div>
              </div>

            </Nav>
          }

          <Nav>
            {
              !user ? <Nav.Link as={Link} to="/login">লগিন</Nav.Link> : <></>
            }
          </Nav>
          <Nav>

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