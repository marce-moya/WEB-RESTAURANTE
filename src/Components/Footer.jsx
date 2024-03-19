import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4" style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>
      <Container>
        <Row>
          <Col md={6}>
            <h5>Información de contacto</h5>
            <p>Dirección: Calle Principal #123</p>
            <p>Teléfono: 555-1234-5678</p>
            <p>Email: empanadasdelacasa@gmail.com</p>
          </Col>
          <Col md={6}>
            <h5>Enlaces útiles</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/Blog">Blog</a></li>
              <li><a href="/Retirar">Retirar en local</a></li>
              <li><a href="/Contacto">Formulario de Contacto</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer
