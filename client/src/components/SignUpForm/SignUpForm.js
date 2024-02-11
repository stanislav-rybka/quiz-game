import React, { useContext, useState } from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { GAME_ROUTE, LOGIN_ROUTE } from '../../utils/constants';
import { NavLink, useNavigate } from 'react-router-dom';
import { registration } from '../../http/userAPI';


const SignUpForm = observer(() => {
  // Context hooks
  const { user } = useContext(Context);

  // State hooks
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  // Using hook to navigate to pages
  const navigate = useNavigate();


  // Action handlers
  const handleSignUpButtonClick = async () => {
    try {
      const response = await registration(email, password, nickname);

      user.setUser(response.data);
      user.setIsAuthorized(true);

      navigate(GAME_ROUTE);
    } catch (err) {
      alert(err.response.data.message);
    }
  }


  return (
    <Card className="px-5 py-4">

      <h2 className="m-auto">Sign Up</h2>
    
      <Form className="mt-5">

        <FloatingLabel controlId="floating-nickname" label="Nickname" className="mb-3">
          <Form.Control type="text" placeholder="john_123abc" onChange={(e) => setNickname(e.target.value)} />
        </FloatingLabel>
      
        <FloatingLabel controlId="floating-email" label="Email address" className="mb-3">
          <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
        </FloatingLabel>

        <FloatingLabel controlId="floating-password" label="Password">
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
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
});


export default SignUpForm;