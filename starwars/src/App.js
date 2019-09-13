import React, { useState, useEffect }from 'react';
import './App.css';
import axios from 'axios';
import Card from './Card.js';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const numOfChars = 6;

  return (
    <div className="App">
      <div className ="header-container">
        <h1 className="Header">React Wars</h1>
      </div>
      <div className="cards-container">
        <Card num="1"/>
        <Card num="2"/>
        <Card num="3"/>
        <Card num="4"/>
        <Card num="5"/>
        <Card num="6"/>
      </div>
    </div>
  );
}

export default App;
