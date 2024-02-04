import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Greeting from '../components/Greeting/Greeting';
import Quiz from '../components/Quiz/Quiz';


const Game = () => {
  const [gameIsStarted, setGameIsStarted] = useState(false);

  return (
    <Container style={{ height: window.innerHeight - 76 }}>

      <Row className="h-100 justify-content-center align-items-center">

        <Col xs={8}>

          {!gameIsStarted ? (

            <Greeting onStartGame={() => { setGameIsStarted(true) }} />

          ) : (

            <Quiz />

          )}

        </Col>
      
      </Row>

    </Container>
  );
}


export default Game;