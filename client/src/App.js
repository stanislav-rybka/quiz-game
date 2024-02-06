import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Header from './components/Header/Header';


const App = () => {
  return (
    <BrowserRouter>
      {/* Header is visible by default */}
      <Header />

      {/* Adding routes to different URLs */}
      <AppRouter />
    </BrowserRouter>
  );
}


export default App;