import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBS from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import Favorites from '../pages/favorites';
import { useStore } from '../store';


function Navbar() {
  const {favorites}=useStore();
    return (
      <>
<NavbarBS bg="dark" data-bs-theme="dark">
        <Container>
          <NavbarBS.Brand href="#home">Navbar</NavbarBS.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to ="/users">Users</Nav.Link>
            <Nav.Link as={Link} to="/favorites">Favorites({favorites.length})</Nav.Link>
          </Nav>
        </Container>
      </NavbarBS>
      </>
      );}
      export default Navbar;