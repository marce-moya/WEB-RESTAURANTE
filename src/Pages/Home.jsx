import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
// import NavbarComponent from '../Components/NavbarComponent'
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
  const customFontStyle = {
    fontFamily: "'OratorStd', sans-serif"
  };

  return (
    <div>


      <div style={{ backgroundColor: 'black', color: '#fff', width: 'auto', height: 'auto', marginTop: '0', paddingTop: '20px' }}>
        <Container className="bg- text-light" style={customFontStyle}>
          <Row className="mt-4 align-items-center">
            <Col xs={12} md={6} className="text-center">
              <h2 className="mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>Bienvenido a Empanadas de la Casa</h2>
              
              <p className="mb-0 text-justify">
                El destino definitivo para los amantes de las empanadas en Concón!

                Sumérgete en la experiencia gastronómica mientras te deleitas con nuestras exquisitas empanadas fritas, preparadas con los sabores más auténticos de la región de Valparaíso, Chile. Desde la calidez y autenticidad de nuestra cocina casera hasta la frescura de nuestros ingredientes locales, cada bocado es una explosión de sabores que te transportará a las tradiciones culinarias de nuestra región.

                Nuestra pasión por la comida se fusiona con el encanto pintoresco de Concón, Con su impresionante belleza natural y su rica historia gastronómica.

                Desde empanadas rellenas de suculentos mariscos frescos capturados en las aguas del Pacífico hasta opciones más tradicionales como carne, queso, y vegetales, nuestra variedad de sabores y rellenos es incomparable. Cada empanada está cuidadosamente elaborada con ingredientes frescos y de la más alta calidad, garantizando una experiencia gastronómica inolvidable en cada visita.

                ¡Te esperamos!
              </p>
            </Col>
            <Col>
              <div style={{ maxWidth: '100%', height: 'auto', overflow: 'hidden', borderRadius: '50%' }}>
                <Image src="Home 1.png" fluid style={{ width: '100%', height: 'auto' }} />
              </div>
            </Col>
          </Row>
          <Row className="mt-4 justify-content-center align-items-center">
            <Col>
              <div style={{ maxWidth: '100%', width: '50vw', height: '50vw', maxHeight: '100vh', overflow: 'hidden', borderRadius: '50%', margin: 'auto' }}>
                <Image src="Logo.png" fluid style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </div>
  );
};

export default Home;
