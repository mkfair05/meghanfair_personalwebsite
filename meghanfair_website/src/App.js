import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <head className="App-header">
          {/* <!-- Import Google Icon Font --> */}
          <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
          {/* <!-- Import materialize.css --> */}
          <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" rel="stylesheet"></link>
        </head>

        <body>
          {/* <!-- Import jQuery before materialize.js --> */}
          <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
          {/* <!-- And then your bundled js --> */}
          <script src="path/to/your/bundle.js"></script>
        </body>
        
      </div>
    );
  }
}

export default App;
