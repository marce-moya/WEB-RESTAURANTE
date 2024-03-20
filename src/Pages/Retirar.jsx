import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ShoppingCart from '../Components/ShoppingCart'
import ProductSelectionForm from '../Components/ProductSelectionForm' 

const Retirar = () => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };


  return (
     <Container>
      <Row className="mt-4">
        <Col md={6}>
          <ProductSelectionForm onAddToCart={addToCart} />
        </Col>
        <Col md={6}>
          <ShoppingCart cartItems={cartItems} />
        </Col>
      </Row>
    </Container>
  );
}
export default Retirar