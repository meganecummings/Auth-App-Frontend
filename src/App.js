import React from 'react';
import Navbar from './components/Layout/NavBar';
import Routes from './config/routes';

import './App.css';

function App() {
  return (
    <>
    <Navbar />
      <div className="container">
        <Routes />
      </div>
    </>
  );
};

export default App;
