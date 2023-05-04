import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

function NavBar() {

  const NavBarBrandStyle= {fontSize:'1.9rem'};
  const NavBarWeight= {fontWeight:'400'};
  const NavBarStyle= {fontSize:'18px'};
  const NavBarStyleHeight= {height:'65px'};

  return (
    <Navbar  bg='light' variant='light'  expand="md" sticky='top' style={NavBarStyleHeight} >
      <Container>
        <Navbar.Brand href="#home" style={NavBarBrandStyle}><img src="/img1.png"
              width="45"
              height="45"
              className="d-inline-block align-center"
              alt="Cuttly"
            /><i style={NavBarWeight}>Cuttly</i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="me-auto" style={NavBarStyle}>
            <Link to="/">Home</Link>
            <Link to="/history">History</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/about">About Us</Link>
            <Link to="https://github.com/zohaibabdullah1/URL-Shortner" target='_blank'>GitHub</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;