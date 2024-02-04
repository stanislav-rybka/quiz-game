import React, { useContext } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { GAME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/constants';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';


const Auth = () => {
  const { user } = useContext(Context);

  // Using hook to navigate to pages
  const navigate = useNavigate();

  // Using hook to identify current location (path)
  const currentLocation = useLocation();
  const isLogin = (currentLocation.pathname === LOGIN_ROUTE);

  return (
    <Container style={{ height: window.innerHeight - 76 }}>

      <Row className="h-100 justify-content-center align-items-center">

        <Col xs={6}>

          <Card className="px-5 py-4">

            <h2 className="m-auto"> {isLogin ? 'Login' : 'Sign Up'} </h2>
          
            <Form className="mt-5">
            
              <FloatingLabel controlId="floating-email" label="Email address" className="mb-3">
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>

              <FloatingLabel controlId="floating-password" label="Password">
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>

              <Row className="mt-4 justify-content-between">
              
                <Col>
                  {isLogin ? (
                    <div>
                      Don't have an account? <NavLink to={REGISTRATION_ROUTE}>Sign Up</NavLink>
                    </div>
                  ) : (
                    <div>
                      Have an account? <NavLink to={LOGIN_ROUTE}>Login</NavLink>
                    </div>
                  )}
                </Col>

                <Col xs="auto">
                  {isLogin ? (

                    <Button variant="secondary" onClick={() => { 
                      user.setIsAuthorized(true);
                      navigate(GAME_ROUTE);
                    }}>
                      Login
                    </Button>

                  ) : (

                    <Button variant="secondary" onClick={() => {
                      user.setIsAuthorized(true);
                      navigate(GAME_ROUTE); 
                    }}>
                      Register
                    </Button>

                  )}
                </Col>

              </Row>

            </Form>

          </Card>

        </Col>

      </Row>
      

    </Container>
  )
};


export default Auth;