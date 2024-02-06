import React, { useState, useContext } from "react";
import { Context } from "../../index";
import { observer } from 'mobx-react-lite';
import CategorySelector from "../CategorySelector/CategorySelector";
import QuizSelector from "../QuizSelector/QuizSelector";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';


const QuizInitializer = observer(({ onStart }) => {
  const { user } = useContext(Context);
  
  // State hooks
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState(null);


  // Action handlers
  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    setSelectedQuiz(null);
  }

  const handleQuizSelection = (quiz) => {
    setSelectedQuiz(quiz);
  }

  const handleStartButtonClick = () => {
    onStart(selectedQuiz.id);
  };


  return (
    <Card>
      <Card.Body className="">
        <Card.Title>
          {user.isAuthorized ? `Welcome, ${user.nickname}!` : 'Welcome!'}
        </Card.Title>

        <Card.Text>
          Please, select a quiz with specific category. Once you are ready, click the "Start Quiz" button to start a quiz.
        </Card.Text>

        <Accordion defaultActiveKey={['0']}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Category</Accordion.Header>

            <Accordion.Body className="bg-light">
              <CategorySelector 
                value={selectedCategory} 
                onSelect={handleCategorySelection} 
              />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Quiz</Accordion.Header>

            <Accordion.Body className="bg-light">
              <QuizSelector 
                category={selectedCategory}
                value={selectedQuiz}
                onSelect={handleQuizSelection} 
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <div class="d-flex justify-content-end mt-4">
          <Button
            variant="success"
            disabled={ !selectedCategory || !selectedQuiz }
            onClick={handleStartButtonClick}
          >
            Start Quiz
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
});


export default QuizInitializer;