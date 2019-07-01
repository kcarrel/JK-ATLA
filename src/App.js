import React, { Component} from 'react';
import atla from './atla.png';
import './App.css';
import Generator from './Components/Generator'

class App extends Component {


  render () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={atla} alt="logo" />
        <p>
          Alternate ATLA Generator - JK edition
        </p>
        <Generator></Generator>
      </header>
    </div>
  );
  }
}

export default App;
