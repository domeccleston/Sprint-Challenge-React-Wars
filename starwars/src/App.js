import React from 'react';
import './App.css';
import Cards from './Cards.js';

const App = () => {

  return (
    <div className="App">
      <div className ="header-container">
        <h1 className="Header">React Wars</h1>
      </div>
        <Cards />
    </div>
  );
}

export default App;
