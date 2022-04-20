import './App.css';
import {Routes} from 'react-router-dom';
import React from 'react';
import {useRoutes} from './routes';

function App() {
  const routes = useRoutes(false);
  return (
    <div className="App">
      <Routes>
        {routes}
      </Routes>
    </div>
  );
}

export default App;
