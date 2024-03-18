import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const Blog = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h2>Empanadas Caseras</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam nunc eget urna lobortis luctus. Donec vitae condimentum lacus. Cras sit amet fermentum ex, id aliquet odio. Nulla facilisi. Nulla ac lacus eget sapien consequat bibendum. Quisque non augue vel mi malesuada ullamcorper. 
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
        <Image src="Home 2.png" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Blog