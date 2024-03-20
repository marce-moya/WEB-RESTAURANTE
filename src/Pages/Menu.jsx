  import React from 'react';
  import Button from 'react-bootstrap/Button';
  import Card from 'react-bootstrap/Card';
  import Row from 'react-bootstrap/Row';
  import Col from 'react-bootstrap/Col';
  
  const Menu = () => {
    
    const menuItems = [
      {
        id: 1,
        title: 'Tradicional Pino de Carne $3.000.-',
        imageSrc: './public/Tradicional Pino de Carne.png',
        description: 'Deliciosa empanada rellena con el mejor pino cocinado con carne picada, cebolla y los mejores aliños.',
        
      },
      {
        id: 1,
        title: 'Nueva Capresse $3.500.-',
        imageSrc: './public/Nueva Capresse.png',
        description: 'Deliciosa empanada rellena con el mejor pino cocinado con carne picada, cebolla y los mejores aliños.',
        
      },
      {
        id: 1,
        title: 'Vegana No Carne $3.500.-',
        imageSrc: './public/Vegana not Carne.png',
        description: 'Deliciosa empanada rellena con el mejor pino cocinado con carne picada, cebolla y los mejores aliños.',
        
      },
      {
        id: 1,
        title: 'Tradicional Pino de Loco $3.800.-',
        imageSrc: './public/Tradicional Pino de Locos.png',
        description: 'Deliciosa empanada rellena con el mejor pino cocinado con carne picada, cebolla y los mejores aliños.',
        
      },
      {
        id: 1,
        title: 'Nueva Chupe de Jaiba $3.800.-',
        imageSrc: './public/Nueva Chupe de Jaiba Queso.png',
        description: 'Deliciosa empanada rellena con el mejor pino cocinado con carne picada, cebolla y los mejores aliños.',
        
      },
      {
        id: 1,
        title: 'Tradicional Aceituna Queso $3.200.-',
        imageSrc: './public/Tradicional Aceituna Queso.png',
        description: 'Deliciosa empanada rellena con el mejor pino cocinado con carne picada, cebolla y los mejores aliños.',
        
      },
      {
        id: 1,
        title: 'Nueva Chupe de Locos $3.800.-',
        imageSrc: './public/Nueva Chupe de Locos.png',
        description: 'Deliciosa empanada rellena con el mejor pino cocinado con carne picada, cebolla y los mejores aliños.',
        
      },
      {
        id: 1,
        title: 'Tradicional Camarón Queso $3.200.-',
        imageSrc: './public/Tradicional Camaron Queso.png',
        description: 'Deliciosa empanada rellena con el mejor pino cocinado con carne picada, cebolla y los mejores aliños.',
        
      },
      {
        id: 1,
        title: 'Nueva Mechada Queso $3.500.-',
        imageSrc: './public/Nueva Mechada Queso.png',
        description: 'Deliciosa empanada rellena con el mejor pino cocinado con carne picada, cebolla y los mejores aliños.',
        
      },
      {
        id: 1,
        title: 'Tradicional Champiñon Queso $3.000.-',
        imageSrc: './public/Tradicional Champiñon Queso.png',
        description: 'Deliciosa empanada rellena con el mejor pino cocinado con carne picada, cebolla y los mejores aliños.',
        
      },
      {
        id: 1,
        title: 'Tradicional Jamón Queso $3.000.-',
        imageSrc: './public/Tradicional Jamón Queso.png',
        description: 'Deliciosa empanada rellena con el mejor pino cocinado con carne picada, cebolla y los mejores aliños.',
        
      },
      {
        id: 1,
        title: 'Tradicional Ostión Queso $3.700.-',
        imageSrc: './public/Tradicional Ostion Queso.png',
        description: 'Deliciosa empanada rellena con el mejor pino cocinado con carne picada, cebolla y los mejores aliños.',
        
      },
      {
        id: 1,
        title: 'Tradicional Queso $2.500.-',
        imageSrc: './public/Tradicional Queso.png',
        description: 'Deliciosa empanada rellena con el mejor pino cocinado con carne picada, cebolla y los mejores aliños.',
        
      },
      {
        id: 1,
        title: 'Tradicional Surtido de Mariscos $3.000.-',
        imageSrc: './public/Tradicional Surtido Mariscos.png',
        description: 'Deliciosa empanada rellena con el mejor pino cocinado con carne picada, cebolla y los mejores aliños.',
        
      },
      {
        id: 1,
        title: 'Bebida Agua sin Gas $1.000.-',
        imageSrc: './public/Bebida Agua sin Gas.png',
        description: 'Deliciosa empanada rellena con el mejor pino cocinado con carne picada, cebolla y los mejores aliños.',
        
      },
      {
        id: 1,
        title: 'Bebida Agua con Gas $1.000.-',
        imageSrc: './public/Bebida Agua con Gas.png',
        description: 'Deliciosa empanada rellena con el mejor pino cocinado con carne picada, cebolla y los mejores aliños.',
        
      },
      {
        id: 1,
        title: 'Bebida Canada Dry $1.000',
        imageSrc: './public/Bebida Canada.png',
        description: 'Deliciosa empanada rellena con el mejor pino cocinado con carne picada, cebolla y los mejores aliños.',
        
      },
      {
        id: 1,
        title: 'Bebida Jugo Durazno $1.000',
        imageSrc: './public/Bebida Durazno.png',
        description: 'Deliciosa empanada rellena con el mejor pino cocinado con carne picada, cebolla y los mejores aliños.',
        
      },
      {
        id: 1,
        title: 'Bebida Limón Soda $1.000',
        imageSrc: './public/Bebida LimonSoda.png',
        description: 'Deliciosa empanada rellena con el mejor pino cocinado con carne picada, cebolla y los mejores aliños.',
        
      },
      {
        id: 1,
        title: 'Bebida Pepsi Zero $1.000',
        imageSrc: './public/Bebida Pepsi Zero.png',
        description: 'Deliciosa empanada rellena con el mejor pino cocinado con carne picada, cebolla y los mejores aliños.',
        
      },
      {
        id: 1,
        title: 'Bebida Pepsi $1.000',
        imageSrc: './public/Bebida Pepsi.png',
        description: 'Deliciosa empanada rellena con el mejor pino cocinado con carne picada, cebolla y los mejores aliños.',
        
      },
      {
        id: 1,
        title: 'Bebida Jugo Piña $1.000',
        imageSrc: './public/Bebida Pina.png',
        description: 'Deliciosa empanada rellena con el mejor pino cocinado con carne picada, cebolla y los mejores aliños.',
        
      },
      
    ];
  
    return (
      <Row xs={1} md={3} className="g-4">
        {menuItems.map((item) => (
          <Col key={item.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.imageSrc} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button variant="dark">Agregar al carrito</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  };
  
  export default Menu











//   return (
//     <>
//   <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="./public/Tradicional Pino de Carne.png" />
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the
//       bulk of the card's content.
//     </Card.Text>
//     <Button variant="dark">Agregar al carrito</Button>
//   </Card.Body>
// </Card>
//     </>

//   );
// }

// export default Menu