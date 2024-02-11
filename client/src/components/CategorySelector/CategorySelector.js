import React, { useEffect, useState } from 'react';
import { fetchAllCategories } from '../../http/categoryAPI';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';


const CategorySelector = ({ value, onSelect }) => {
  // State hooks
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);


  // Loading categories
  useEffect(() => {

    fetchAllCategories()
      .then(response => setCategories(response.data))
      .finally(() => setLoading(false));

  }, []);


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
      {categories.length > 0 && categories.map(category => (

        <ListGroup.Item
          key={category.id}
          action
          variant="light"
          className="text-center"
          active={category.id === value?.id}
          onClick={() => onSelect(category)}
        >
          {category.name}
        </ListGroup.Item>

      ))}

      {categories.length === 0 && (

        <ListGroup.Item className="text-center">
          No categories found
        </ListGroup.Item>

      )}
    </ListGroup>
  );
}


export default CategorySelector;