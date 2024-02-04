import React, { useContext } from 'react';
import { Context } from '../../index';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { GAME_ROUTE, LOGIN_ROUTE } from '../../utils/constants';
import { NavLink, useNavigate } from 'react-router-dom';


const SignUpForm = () => {
  const { user } = useContext(Context);

  // Using hook to navigate to pages
  const navigate = useNavigate();


  function handleSignUpButtonClick() {
    user.setIsAuthorized(true);
    navigate(GAME_ROUTE);
  }


  return (
    <Card className="px-5 py-4">

      <h2 className="m-auto">Sign Up</h2>
    
      <Form className="mt-5">

        <FloatingLabel controlId="floating-nickname" label="Nickname" className="mb-3">
          <Form.Control type="text" placeholder="john_123abc" />
        </FloatingLabel>
      
        <FloatingLabel controlId="floating-email" label="Email address" className="mb-3">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>

        <FloatingLabel controlId="floating-password" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>

        <Row className="mt-4 justify-content-between">
        
          <Col>

            <div>
              Have an account? <NavLink to={LOGIN_ROUTE}>Login</NavLink>
            </div>

          </Col>

          <Col xs="auto">

            <Button variant="secondary" onClick={handleSignUpButtonClick}>
              Sign Up
            </Button>

          </Col>

        </Row>

      </Form>

    </Card>
  );
}


export default SignUpForm;