import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4" style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>
      <Container>
        <Row>
          <Col md={6}>
          <h6>Información de contacto</h6>
            <p style={{ textAlign: 'justify', marginBottom: '5px' }}>Dirección: Calle Principal #123</p>
            <p style={{ textAlign: 'justify', marginBottom: '5px' }}>Teléfono: 555-1234-5678</p>
            <p style={{ textAlign: 'justify', marginBottom: '5px' }}>Email: empanadasdelacasa@gmail.com</p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <a href="https://www.facebook.com/home.php" target="_blank" rel="noopener noreferrer" style={{ color: 'orange' }}><FaFacebook /></a>
              <a href="https://www.instagram.com/?hl=es-es" target="_blank" rel="noopener noreferrer" style={{ color: 'orange' }}><FaInstagram /></a>
            </div>
          </Col>
          <Col md={6}>
            <h6>Enlaces útiles</h6>
            <ul className="list-unstyled">
              <li><a href="/"style={{ color: 'orange' }}>Home</a></li>
              <li><a href="/Blog"style={{ color: 'orange' }}>Blog</a></li>
              <li><a href="/Retirar"style={{ color: 'orange' }}>Retirar en local</a></li>
              <li><a href="/Contacto"style={{ color: 'orange' }}>Formulario de Contacto</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer
