import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuizInitializer from '../components/QuizInitializer/QuizInitializer';
import Quiz from '../components/Quiz/Quiz';
import QuizResults from '../components/QuizResults/QuizResults';
import { STATUS_NOT_STARTED, STATUS_STARTED, STATUS_FINISHED } from '../utils/constants';


const Game = () => {
  // State hooks
  const [gameStatus, setGameStatus] = useState(STATUS_NOT_STARTED);
  const [quizId, setQuizId] = useState(null);


  // Action handlers
  const handleQuizStart = (quizId) => {
    setQuizId(quizId);
    setGameStatus(STATUS_STARTED);
  };

  const handleQuizFinish = () => {
    setGameStatus(STATUS_FINISHED);
  }


  return (
    <Container style={{ height: window.innerHeight - 76 }}>

      <Row className="h-100 justify-content-center align-items-center">

        <Col xs={8}>

          {gameStatus === STATUS_NOT_STARTED && (

            <QuizInitializer onStart={handleQuizStart} />

          )}

            {/* <Greeting onStartGame={() => setGameStatus(STATUS_STARTED)} /> */}


          {gameStatus === STATUS_STARTED && (

            <Quiz quizId={quizId} onFinish={handleQuizFinish} />

          )}


          {gameStatus === STATUS_FINISHED && (

            <QuizResults />

          )}

        </Col>
      
      </Row>

    </Container>
  );
}


export default Game;