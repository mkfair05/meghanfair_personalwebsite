import React from 'react';
import './App.css';
import StickyFooter from './StickyFooter';
import Header from './Header';
import NasaCard from './NasaCard';
import EmployeeDatabase from './EmployeeDatabase'
import AboutMe from './AboutMe'
// import {Skeleton} from '@material-ui/lab';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-content">
        <NasaCard />
        <EmployeeDatabase />
        <AboutMe />
      </div>
      <StickyFooter />
    </div>
  );
}

export default App;
