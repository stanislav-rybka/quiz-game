import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import GameCard from './components/GameCard/GameCard';
import Stack from 'react-bootstrap/Stack';


const App = () => {
  return (
    // Routing configuration
    <BrowserRouter>

      <AppRouter />

      {/* <Stack className="justify-content-between" style={{ height: "100vh" }}>
        <div>
          <Header />
        </div>

        <div>
          <GameCard />
        </div>
          
        <div>
          <Footer />
        </div>
      </Stack> */}

    </BrowserRouter>
  );
}


export default App;