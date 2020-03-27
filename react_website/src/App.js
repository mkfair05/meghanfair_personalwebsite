import React from 'react';
import logo from './logo.svg';
import './App.css';
import StickyFooter from './StickyFooter';
import Header from './Header'

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <StickyFooter />
    </div>
  );
}

export default App;
