import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const GameCard = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs="6">
          <Card>
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
};


export default GameCard;