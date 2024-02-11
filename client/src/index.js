import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import QuizStore from './store/QuizStore';


// Global context for the application
export const Context = createContext(null);


const root = ReactDOM.createRoot( document.getElementById('root')) ;


root.render(
  <React.StrictMode>
    {/* Adding user and game stores to be accessible through context */}
    <Context.Provider value={{
      user: new UserStore(),
      quiz: new QuizStore()
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
