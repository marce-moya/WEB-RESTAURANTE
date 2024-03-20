import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import Logo from '../../public/Logo.png'
import {Routes, Route} from 'react-router-dom'


const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="mb-0" style={{ fontFamily: 'Arial, sans-serif', fontSize: '24px' }}>
        <Container>
          
          <Navbar.Brand >
            <img
              src={Logo}
              height="150"
              width="150"
              className="d-inline-block align-top"
              alt="Logo"
            />
            
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to={"/"}style={{ color: 'orange' }}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/Contacto"}style={{ color: 'orange' }}>Contacto</Nav.Link>
            <Nav.Link as={Link} to={"/Menu"}style={{ color: 'orange' }}>Menú</Nav.Link>
            <Nav.Link as={Link} to={"/Retirar"}style={{ color: 'orange' }}>Retirar</Nav.Link>
            <Nav.Link as={Link} to={"/Blog"}style={{ color: 'orange' }}>Blog</Nav.Link>
          </Nav>

          <Routes className="me-auto">
            <Route as={Link} to="/">Home</Route>
            <Route as={Link} to="/Contacto">Contacto</Route>
            <Route as={Link} to="/Menu">Menú</Route>
            <Route as={Link} to="/Retirar">Retirar en Local</Route>
            <Route as={Link} to="/Blog">Blog</Route>
          </Routes>
        </Container>
      </Navbar>

    </div>
  );
};

export default NavbarComponent



// import React from 'react'
// import Container from 'react-bootstrap/Container'
// import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'
// import { Link } from 'react-router-dom'
// import Logo from '../../public/Logo.png'

// const NavbarComponent = () => {
//   return (
//     <div>
//       <Navbar bg="dark" variant="dark">
//         <Container>
          
//           <Navbar.Brand>
//             <img
//               src={Logo}
//               height="30"
//               className="d-inline-block align-top"
//               alt="Logo"
//             />
//             {' Navbar Logo'}
//           </Navbar.Brand>

//           <Nav className="me-auto">
//             <Navbar.Link as={Link} to="/">Home</Navbar.Link>
//             <Navbar.Link as={Link} to="/Contacto">Contacto</Navbar.Link>
//             <Navbar.Link as={Link} to="/Menu">Menú</Navbar.Link>
//             <Navbar.Link as={Link} to="/Retirar">Retirar en Local</Navbar.Link>
//             <Navbar.Link as={Link} to="/Blog">Blog</Navbar.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };

// export default NavbarComponent
