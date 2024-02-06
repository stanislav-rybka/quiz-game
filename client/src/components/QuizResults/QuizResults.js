import React, { useContext } from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


const QuizResults = observer(({ onStartGame }) => {
  // Context hooks
  const { quiz } = useContext(Context);


  // Action handlers
  const handleStartAgainButtonClick = () => {
    window.location.reload(false);
  }


  return (
    <Card>
      <Card.Header className="text-center">
        <h4>Quiz Results</h4>
      </Card.Header>

      <Card.Body className="px-4">
        <Card.Text className="">
          Congratulations! You have completed the "<b><i>{quiz.name}</i></b>" quiz with the following results:
        </Card.Text>

        <Card.Text>
          <ul>
            <li className="text-success">
              Correct answers: {quiz.successQuestions.length}
            </li>
            <li className="text-danger">
              Wrong answers: {quiz.failedQuestions.length}
            </li>
          </ul>
        </Card.Text>

        <Row className="mt-4">
          <Button variant="outline-secondary" onClick={handleStartAgainButtonClick}>
            Start Again
          </Button>
        </Row>
      </Card.Body>
    </Card>
  );
});


export default QuizResults;