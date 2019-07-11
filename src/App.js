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
        <p className="title">
          Alternate ATLA Generator - JK edition
        </p>
        <p className="description">
          What if Avatar the Last Airbender was created by people that constantly retconned weird plot points?
        </p>
        <Generator className="generator"></Generator>
      </header>
    </div>
  );
  }
}

export default App;
