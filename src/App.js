import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
const word = "Noey";
class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h3 className="Content">Please Rearrange the words in the correct order.</h3>
        <h3 className="Hide">by Noeypatt 5935512027</h3>
        <div className="AppHandler as Props">
          <WordCard value="Noey" />
          <button className="Button" title="Noey">Tip </button>

        </div>
      </div>
    );

  }
}
export default App; 