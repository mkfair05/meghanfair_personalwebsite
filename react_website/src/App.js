import React from 'react';
import logo from './logo.svg';
import './App.css';
import StickyFooter from './StickyFooter';
import Header from './Header';
// import {Skeleton} from '@material-ui/lab';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* <Skeleton variant="rect" width={500} height={500} animation="wave"/> */}
      <StickyFooter />
    </div>
  );
}

export default App;
