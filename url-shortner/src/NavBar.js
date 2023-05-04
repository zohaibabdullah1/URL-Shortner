import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function BasicExample() {

  const NavBarBrandStyle= {fontSize:'1.9rem'};
  const NavBarWeight= {fontWeight:'400'};
  const NavBarStyle= {fontSize:'18px'};
  const NavBarStyleHeight= {height:'65px'};

  // const Icon={width=100}
  
  return (
    <Navbar  bg='light' variant='light'  expand="lg" sticky='top' style={NavBarStyleHeight} >
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
            <Nav.Link href="#home"><b>Home</b></Nav.Link>
            <Nav.Link href="#">History</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            <Nav.Link href="#home">GitHub</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;