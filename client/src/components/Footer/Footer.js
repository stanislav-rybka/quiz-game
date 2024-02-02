import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Navbar data-bs-theme="dark" bg="dark">
      <Container className="justify-content-center" fluid>
        <Row>
          <Col>
            <div className="text-light">
              Made for Volodya ({currentYear})
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};


export default Footer;