import './Quiz.css';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Spinner from 'react-bootstrap/Spinner';


const Quiz = observer(({ category, onStartGame }) => {
  // Context hooks
  const { user, quiz } = useContext(Context);

  // Ref hooks
  const answerOptionsRefs = useRef(null);

  const getAnswerOptionRefs = () => {
    if ( !answerOptionsRefs.current ) {
      answerOptionsRefs.current = new Map();
    }

    return answerOptionsRefs.current;
  }
  
  // State hooks
  const [loading, setLoading] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [answerIsSubmitted, setAnswerIsSubmitted] = useState(false);

  // Calculations
  const totalQuestionsCount = quiz.questions.length;
  const submittedQuestionsCount = quiz.currentQuestion.number;
  const progressBarRatio = (100 * submittedQuestionsCount) / totalQuestionsCount;


  // Initializing a quiz
  useEffect(() => {
    quiz.initialize(category).finally(() => {
      setLoading(false);
    });
  }, []);


  // Actions handlers
  const handleAnswerOptionRefInit = (node, answerOption) => {
    const refs = getAnswerOptionRefs();

    if (node) {
      refs.set(answerOption.id, node);
    } else {
      refs.delete(answerOption.id);
    }
  }

  const handleCheckAnswerButtonClick = () => {
    const refs = getAnswerOptionRefs();
    const correctAnswerId = quiz.currentQuestion.details.correctAnswerId;

    if (correctAnswerId === selectedAnswer) {
      quiz.answerIsCorrect();
      refs.get(selectedAnswer).className += ' correct-answer-option';
    } else {
      quiz.answerIsWrong();
      refs.get(selectedAnswer).className += ' incorrect-answer-option';
      refs.get(correctAnswerId).className += ' correct-answer-option';
    }

    setAnswerIsSubmitted(true);
  }

  const handleNextQuestionButtonClick = () => {
    quiz.moveToNextQuestion();
    setAnswerIsSubmitted(false);
  }

  const handleFinishButtonClick = () => {
    console.log('Finish');
  }


  // Rendering a spinner if quiz is not loaded yet
  if (loading) {
    return (
      <Card className="py-3">
        <Row className="justify-content-center">
          <Col xs="auto">
            <Spinner animation="grow" />
          </Col>
        </Row>
      </Card>
    );
  }

  return (
    <Card>

      <Card.Header>

        <ProgressBar 
          variant="success" 
          now={progressBarRatio} 
          label={`${submittedQuestionsCount} / ${totalQuestionsCount}`} 
        />

      </Card.Header>

      
      <Card.Img 
        className="mt-2" 
        variant="top" 
        src={process.env.REACT_APP_API_URL + quiz.currentQuestion.details.image} 
      />


      <Card.Body>

        <Card.Title> {quiz.currentQuestion.details.text} </Card.Title>

        
        <Form>

          <Row className="mt-4">

            {quiz.currentQuestion.details.answerOptions.map(answerOption => (

              <Col key={answerOption.id} xs={12} md={6}>

                <div 
                  className={`p-3 m-1 rounded border ${answerOption.id === selectedAnswer ? 'active-answer-option' : 'answer-option'}`}
                  onClick={() => setSelectedAnswer(answerOption.id)}
                  ref={(node) => handleAnswerOptionRefInit(node, answerOption)}
                >

                  <Form.Check
                    name="question-answer"
                    type="radio"
                    label={answerOption.text}
                    value={answerOption.id}
                    checked={answerOption.id === selectedAnswer}
                    onChange={(e) => setSelectedAnswer(e.target.value)}
                  />

                </div>
                
              </Col>

            ))}

          </Row>

        </Form>


        <Row className="mt-4 justify-content-center">

          <Col xs={12} md={6}>
            <div className="d-flex justify-content-center justify-content-md-end">
              <Button
                variant="secondary" 
                onClick={handleCheckAnswerButtonClick}
              >
                Check Answer
              </Button>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className="d-flex justify-content-center justify-content-md-start mt-2 mt-md-0">

              {submittedQuestionsCount < totalQuestionsCount ? (

                <Button 
                  variant="primary" 
                  onClick={handleNextQuestionButtonClick}
                  disabled={!answerIsSubmitted} 
                >
                  Next Question
                </Button>

              ) : (

                <Button 
                  variant="primary" 
                  onClick={handleFinishButtonClick}
                  disabled={!answerIsSubmitted} 
                >
                  Finish
                </Button>
                
              )}

            </div>
          </Col>

        </Row>

      </Card.Body>

    </Card>
  );
});


export default Quiz;