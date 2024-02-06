import React, { useEffect, useState } from 'react';
import { fetchQuizesByCategoryId } from '../../http/quizAPI';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';


const QuizSelector = ({ category, value, onSelect }) => {
  // State hooks
  const [quizes, setQuizes] = useState([]);
  const [loading, setLoading] = useState(true);


  // Loading quizes
  useEffect(() => {
    if ( !category ) {
      return;
    }

    fetchQuizesByCategoryId(category.id)
      .then(response => setQuizes(response.data))
      .finally(() => setLoading(false));
  }, [category]);


  // Rendering a spinner if quiz is not loaded yet
  if (loading) {
    return (
      <Row className="py-3 justify-content-center">
        <Col xs="auto">
          <Spinner animation="grow" />
        </Col>
      </Row>
    );
  }

  
  return (
    <ListGroup>
      {quizes.length > 0 && quizes.map(quiz => (

        <ListGroup.Item
          key={quiz.id}
          action
          variant="light"
          active={quiz.id === value?.id}
          onClick={() => onSelect(quiz)}
        >
          <h6>{quiz.name}</h6>

          <div>{quiz.description}</div>
        </ListGroup.Item>

      ))}

      {quizes.length === 0 && (
        
        <ListGroup.Item className="text-center">
          No quizes found
        </ListGroup.Item>

      )}
    </ListGroup>
  );
}


export default QuizSelector;