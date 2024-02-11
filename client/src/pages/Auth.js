import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LOGIN_ROUTE } from '../utils/constants';
import { useLocation } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';
import SignUpForm from '../components/SignUpForm/SignUpForm';


const Auth = () => {
  // Using hook to identify current location (path)
  const currentLocation = useLocation();
  const isLogin = (currentLocation.pathname === LOGIN_ROUTE);

  return (
    <Container style={{ height: window.innerHeight - 76 }}>
      <Row className="h-100 justify-content-center align-items-center">
        <Col xs={6}>
          {isLogin ? (

            <LoginForm />
          
          ) : (
          
            <SignUpForm />
          
          )}
        </Col>
      </Row>
    </Container>
  )
};


export default Auth;