import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import GameStore from './store/GameStore';


// Global context for the application
export const Context = createContext(null);


ReactDOM.render(
  <React.StrictMode>

    {/* Adding user and game stores to be accessible through context */}
    <Context.Provider value={{
      user: new UserStore(),
      game: new GameStore()
    }}>

      <App />

    </Context.Provider>
  </React.StrictMode>,

  document.getElementById('root')
);
