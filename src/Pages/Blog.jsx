import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const Blog = () => {
  return (
    <div className="bg-dark text-light">
      <Container>
        <Row className="mt-4" style={{ marginTop: '-30px',paddingTop: '20px' }}>
          <Col>
            <h2>Empanadas Caseras</h2>
            <p>
              ¡Bienvenidos a probar las mejores empanadas de Concón!
              Sumérgete en la historia y los sabores únicos que nos han convertido en un lugar emblemático de Concón, en la hermosa región de Valparaíso, Chile.
              Nuestra historia se remonta a las raíces de nuestra familia, cuya pasión por la cocina y el mar nos ha llevado a crear empanadas fritas rellenas con una deliciosa variedad de productos del mar, queso, vegetales, carne y más. 
              Todo comenzó con un pequeño kiosco en la playa, donde la abuela de la familia Valenzuela compartía su receta secreta de las mejores empanadas fritas, la cual se ha transmitido de generación en generación.
              Hoy en día, nuestras empanadas han sido galardonadas por las más prestigiosas instituciones de cocina de Chile, gracias a su sabor inigualable y a la dedicación de nuestra familia para mantener viva la tradición. 
              Cada bocado es una celebración de nuestros orígenes y un homenaje a la rica historia gastronómica de nuestra región.

              Únete a nosotros en este viaje culinario mientras exploramos los sabores del mar, la tradición familiar y la pasión por la buena comida. ¡Te esperamos en EMPANADAS DE LA CASA!
            </p>
          </Col>
        </Row>
        <Row className="mt-4" style={{ marginTop: '-30px',paddingTop: '20px' }}>
          <Col>
            <Image src="Home 2.png" fluid style={{ maxWidth: '100%', height: 'auto' }} /> 
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog