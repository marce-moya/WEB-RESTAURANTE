import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Contacto from './Pages/Contacto.jsx';
import Blog from './Pages/Blog.jsx';
import Menu from './Pages/Menu.jsx';
import Retirar from './Pages/Retirar.jsx';
import NavbarComponent from './Components/NavbarComponent.jsx';

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
      </div>
    </>
  );
}

export default App;
