import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ShoppingCart from './Components/ShoppingCart'
import ProductSelectionForm from './Components/ProductSelectionForm' 

const Retirar = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col md={6}>
          <ProductSelectionForm /> {/* Colocar el formulario de selección de productos en la columna izquierda */}
        </Col>
        <Col md={6}>
          <ShoppingCart /> {/* Colocar el carrito de compras en la columna derecha */}
        </Col>
      </Row>
    </Container>
  );
}

export default Retirar