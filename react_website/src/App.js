import React from 'react';
import './App.css';
import StickyFooter from './StickyFooter';
import Header from './Header';
import NasaCard from './NasaCard';
// import {Skeleton} from '@material-ui/lab';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-content">
        <NasaCard />
      </div>
      {/* <Skeleton variant="rect" width={500} height={500} animation="wave"/> */}
      <StickyFooter />
    </div>
  );
}

export default App;
