import { useContext } from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { GAME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/constants';


const Header = observer(() => {
  const { user } = useContext(Context);

  // Using hook to navigate to pages
  const navigate = useNavigate();

  // Using hook to identify current location (path)
  const currentLocation = useLocation();
  const isAuthorizationPage = [LOGIN_ROUTE, REGISTRATION_ROUTE].includes(currentLocation.pathname);


  return (
    <Navbar data-bs-theme="dark" bg="dark" >

      <Container>

        <Navbar.Brand>
          <img alt=""
               src="./quiz-logo-white.png"
               width="50"
               height="50"
               className="d-inline-block align-top"
          />
        </Navbar.Brand>


        {isAuthorizationPage ? (
          
          <Nav className="ml-auto">
            <Button variant="outline-light" onClick={() => { navigate(GAME_ROUTE) }}>Back to Game</Button>
          </Nav>

        ) : !user.isAuthorized ? (
          
          <Nav className="ml-auto">
            <Button variant="outline-light" onClick={() => { navigate(LOGIN_ROUTE) }}>Login</Button>
          </Nav>

        ) : (
          
          <Nav className="ml-auto">

            <Navbar.Text className="me-4">
              Signed in as: <a href="#login">{user.nickname}</a>
            </Navbar.Text>

            <Button variant="outline-light" onClick={() => { user.setIsAuthorized(false) }}>Logout</Button>

          </Nav>

        )}

      </Container>

    </Navbar>
  );
});


export default Header;