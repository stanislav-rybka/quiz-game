import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Greeting from '../components/Greeting/Greeting';
import Quiz from '../components/Quiz/Quiz';
import Results from '../components/Results/Results';


const NOT_STARTED = 'Not started';
const STARTED = 'Started';
const FINISHED = 'Finished';


const Game = () => {
  const [gameStatus, setGameStatus] = useState(NOT_STARTED);

  return (
    <Container style={{ height: window.innerHeight - 76 }}>

      <Row className="h-100 justify-content-center align-items-center">

        <Col xs={8}>

          {gameStatus === NOT_STARTED && (

            <Greeting onStartGame={() => setGameStatus(STARTED)} />

          )}


          {gameStatus === STARTED && (

            <Quiz onFinish={() => setGameStatus(FINISHED)} />

          )}


          {gameStatus === FINISHED && (

            <Results />

          )}

        </Col>
      
      </Row>

    </Container>
  );
}


export default Game;