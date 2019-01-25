import React, { Component } from 'react';
import './App.css';
import MainPage from './MainPage';

class App extends Component {

  render() {
    return (
      <div className="App">
      
        {/* <div className="App-header"> */}
          <title>Meghan Fair React Website</title>
          
          {/* <!-- Import Google Icon Font --> */}
          <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
          {/* <!-- Import materialize.css --> */}
          <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" rel="stylesheet"></link>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous"></link>

        {/* </div> */}

        {/* <body> */}
          {/* <!-- Import jQuery before materialize.js --> */}
          <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
          {/* <!-- And then your bundled js --> */}
          <script src="path/to/your/bundle.js"></script>
          
          <script src="https://unpkg.com/react-router/umd/react-router.min.js"></script>
          <script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>

          <MainPage/>
        {/* </body> */}

      </div>
    );
  }
}

export default App;
