import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Contacto() {
  const [comentario, setComentario] = useState('');

  const handleChange = (event) => {
    setComentario(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // pendiente la lógica para enviar el comentario a la base de datos en la nube
    console.log('Comentario enviado:', comentario);

    setComentario('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalNombre">
        <Form.Label column sm={2}>
          Nombre
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Nombre y Apellido" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalTelefono">
        <Form.Label column sm={2}>
          Teléfono de contacto
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Teléfono" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          E-mail
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalComentario">
        <Form.Label column sm={2}>
          Comentario
        </Form.Label>
        <Col sm={10}>
          <Form.Control as="textarea" rows={3} value={comentario} onChange={handleChange} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Enviar</Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default Contacto;
