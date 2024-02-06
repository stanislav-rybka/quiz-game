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


const Quiz = observer(({ quizId, onFinish }) => {
  // Context hooks
  const { quiz } = useContext(Context);

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
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerIsSubmitted, setAnswerIsSubmitted] = useState(false);

  // Calculations
  const currentQuestion = quiz.currentQuestion.details;
  const totalQuestionsCount = quiz.questions.length;
  const submittedQuestionsCount = quiz.currentQuestion.number;
  const progressBarRatio = (100 * submittedQuestionsCount) / totalQuestionsCount;


  // Initializing a quiz
  useEffect(() => {

    quiz.initialize(quizId)
      .finally(() => setLoading(false));

  }, [quiz, quizId]);


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
    const correctAnswerId = currentQuestion.correctAnswerId;

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
    setSelectedAnswer(null);
    setAnswerIsSubmitted(false);
  }

  const handleFinishButtonClick = () => {
    onFinish();
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
      <Card.Header className="text-center">
        {quiz.name}
      </Card.Header>

      <Card.Header>
        <ProgressBar 
          variant="success" 
          now={progressBarRatio} 
          label={`${submittedQuestionsCount} / ${totalQuestionsCount}`} 
        />
      </Card.Header>

      {currentQuestion.image && (

        <Card.Img 
          className="mt-2" 
          variant="top" 
          src={process.env.REACT_APP_API_URL + currentQuestion.image} 
        />

      )}

      <Card.Body>
        <Card.Title> {currentQuestion.text} </Card.Title>

        <Form>
          <Row className="mt-4">
            {currentQuestion.answers.map(answer => (

              <Col key={answer.id} xs={12} md={6}>
                <div 
                  className={`p-3 m-1 rounded border ${answer.id === selectedAnswer ? 'active-answer-option' : 'answer-option'}`}
                  onClick={() => !answerIsSubmitted && setSelectedAnswer(answer.id)}
                  ref={(node) => handleAnswerOptionRefInit(node, answer)}
                >
                  <Form.Check
                    name="question-answer"
                    type="radio"
                    label={answer.text}
                    value={answer.id}
                    checked={answer.id === selectedAnswer}
                    disabled={answerIsSubmitted}
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
                disabled={ !selectedAnswer || answerIsSubmitted }
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