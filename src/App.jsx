import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '.src/Pages/Home.jsx'
import Contacto from '.src/Pages/Contacto.jsx'
import Blog from '.src/Pages/Blog.jsx'
import Menu from '.src/Pages/Menu.jsx'
import Retirar from '.src/Pages/Retirar.jsx'
import NavbarComponent from '.src/Components/NavbarComponent.jsx'
import Footer from '.src/Components/Footer.jsx'

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
