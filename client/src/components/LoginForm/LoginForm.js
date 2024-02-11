import React, { useContext, useState } from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { GAME_ROUTE, REGISTRATION_ROUTE } from '../../utils/constants';
import { NavLink, useNavigate } from 'react-router-dom';
import { login } from '../../http/userAPI';


const LoginForm = observer(() => {
  // Context hooks
  const { user } = useContext(Context);

  // State hooks
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Using hook to navigate to pages
  const navigate = useNavigate();

  
  // Action handlers
  const handleLoginButtonClick = async () => {
    try {
      const response = await login(email, password);

      user.setUser(response.data);
      user.setIsAuthorized(true);

      navigate(GAME_ROUTE);
    } catch (err) {
      alert(err.response.data.message);
    }
  }


  return (
    <Card className="px-5 py-4">
      <h2 className="m-auto">Login</h2>
    
      <Form className="mt-5">
        <FloatingLabel controlId="floating-email" label="Email address" className="mb-3">
          <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
        </FloatingLabel>

        <FloatingLabel controlId="floating-password" label="Password">
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </FloatingLabel>

        <Row className="mt-4 justify-content-between">
          <Col>
            <div>
                Don't have an account? <NavLink to={REGISTRATION_ROUTE}>Sign Up</NavLink>
            </div>
          </Col>

          <Col xs="auto">
            <Button variant="secondary" onClick={handleLoginButtonClick}>
              Login
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
});


export default LoginForm;