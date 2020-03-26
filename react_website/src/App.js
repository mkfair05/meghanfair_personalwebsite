import React from 'react';
import logo from './logo.svg';
import './App.css';
import StickyFooter from './StickyFooter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <StickyFooter />
    </div>
  );
}

export default App;
