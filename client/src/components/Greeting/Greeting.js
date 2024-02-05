import React, { useContext } from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Greeting = observer(({ onStartGame }) => {
  const { user, quiz } = useContext(Context);

  return (
    <Card>

      <Card.Body className="text-center">

        <Card.Title>

          {user.isAuthorized ? `Welcome, ${user.nickname}!` : 'Welcome!'}

        </Card.Title>


        <Card.Text className="mt-4">
          Quiz consists of {quiz.defaultQuestionsCount} questions.
        </Card.Text>

        <Card.Text className="mt-4">
          Once you are ready, click the button to start the quiz.
        </Card.Text>

        <Card.Text className="mt-4">
          Good Luck!
        </Card.Text>


        <Button className="mt-3" variant="success" onClick={onStartGame}>
          Start Quiz
        </Button>

      </Card.Body>
    
    </Card>
  );
});


export default Greeting;