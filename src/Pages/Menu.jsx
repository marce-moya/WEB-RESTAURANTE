import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Menu = () => {
  return (
    <>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="./public/Tradicional Pino de Carne.png" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="dark">Agregar al carrito</Button>
  </Card.Body>
</Card>
    </>

  );
}

export default Menu