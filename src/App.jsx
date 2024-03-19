import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contacto from './Pages/Contacto'
import Blog from './Pages/Blog'
import Menu from './Pages/Menu'
import Retirar from './Pages/Retirar'
import NavbarComponent from './Components/NavbarComponent'
import Footer from './Components/Footer.jsx'

function App() {
  return (
    <>
      <div>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Retirar" element={<Retirar />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
