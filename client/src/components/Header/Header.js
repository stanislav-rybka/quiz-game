import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <Navbar data-bs-theme="dark" bg="dark" >
      <Container>
        <Navbar.Brand href="#home">
          <img alt=""
               src="./quiz-logo-white.png"
               width="50"
               height="50"
               className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Stanislav Rybka</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


export default Header;