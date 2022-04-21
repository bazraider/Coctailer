import './App.css';
import { Routes } from 'react-router-dom';
import React from 'react';
import { useRoutes } from './routes';
import { useLogin } from './hooks/login.hook';
import { LoginContext } from './context/LoginContext'

function App() {
  const {token, login, logout, userId} = useLogin();
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated);
  return (
    <LoginContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <div className="App">
        <Routes>
          {routes}
        </Routes>
      </div>
    </LoginContext.Provider>
  );
}

export default App;
