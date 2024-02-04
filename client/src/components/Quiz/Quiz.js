import './Quiz.css';
import React, { useContext, useState } from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';


const Quiz = observer(({ onStartGame }) => {
  const { user, quiz } = useContext(Context);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  return (
    <Card>

      <Card.Header>

        <ProgressBar variant="success" now={5} label={`${1} / ${20}`} />
      
      </Card.Header>

      
      <Card.Img className="mt-2" variant="top" src={process.env.REACT_APP_API_URL + quiz.currentQuestion.image} />


      <Card.Body>

        <Card.Title>
          {quiz.currentQuestion.text}
        </Card.Title>

        
        <Form>

          <Row className="mt-4">

            {quiz.currentQuestion.possibleAnswers.map(answer => (

              <Col key={answer} xs={12} md={6}>

                <div className="p-3 m-1 rounded border answer-option" onClick={() => setSelectedAnswer(answer)}>
              
                  <Form.Check
                    name="question-answer"
                    type="radio"
                    label={answer}
                    value={answer}
                    checked={answer === selectedAnswer}
                    onChange={(e) => setSelectedAnswer(e.target.value)}
                  />

                </div>
                
              </Col>

            ))}

          </Row>

        </Form>


        <Row className="mt-4 justify-content-center">

          <Col className="m-1" xs="auto">
            <Button variant="secondary">Check Answer</Button>
          </Col>

          <Col className="m-1" xs="auto">
            <Button variant="primary">Next Question</Button>
          </Col>

        </Row>

      </Card.Body>

    </Card>
  );
});


export default Quiz;