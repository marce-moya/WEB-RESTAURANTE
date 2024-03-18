    import React from 'react'
    import Container from 'react-bootstrap/Container';
    import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';
    import {Link} from 'react-router-dom'


    const NavbarComponent = () => {
      return (
        
        <div>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand as={Link} to="/">Navbar Logo</Navbar.Brand>
              <Nav className="me-auto">
                  <Navbar.Link as={Link} to="/">Home</Navbar.Link>
                  <Navbar.Link as={Link} to="/Contacto">Contacto</Navbar.Link>
                  <Navbar.Link as={Link} to="/Menu">Menú</Navbar.Link>
                  <Navbar.Link as={Link} to="/Retirar">Retirar en Local</Navbar.Link>
                  <Navbar.Link as={Link} to="/Blog">Blog</Navbar.Link>
              </Nav>
            </Container>

          </Navbar>

          
        </div>
      )
    }

    export default NavbarComponent;
