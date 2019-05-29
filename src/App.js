import React, { Component} from 'react';
import atla from './atla.png';
import './App.css';

class App extends Component {


  render () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={atla} alt="logo" />
        <p>
          Guess Who? - Yip Yip edition
        </p>
        
      </header>
    </div>
  );
  }
}

export default App;
