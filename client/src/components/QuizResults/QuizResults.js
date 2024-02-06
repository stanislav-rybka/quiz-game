import React, { useContext } from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import Card from 'react-bootstrap/Card';


const QuizResults = observer(({ onStartGame }) => {
  // Context hooks
  const { quiz } = useContext(Context);


  return (
    <Card>
      <Card.Header className="text-center">
        Results
      </Card.Header>

      <Card.Body className="px-4">
        <Card.Text className="mt-3 text-success">
          Questions with correct answers: {quiz.successQuestions.length}
        </Card.Text>

        <Card.Text className="mt-4 text-danger">
          Questions with wrong answers: {quiz.failedQuestions.length}
        </Card.Text>
      </Card.Body>
    </Card>
  );
});


export default QuizResults;