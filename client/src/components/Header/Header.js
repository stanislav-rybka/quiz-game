import { useContext } from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';


const Header = observer(() => {
  const { user } = useContext(Context);

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

        {!user.isAuthorized ?(
          
          <Nav className="ml-auto">

            <Button variant="outline-light" onClick={() => { user.setIsAuthorized(true) }}>Login</Button>

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