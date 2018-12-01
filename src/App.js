import React, { Component } from 'react';
import './App.css';

import GameBoard from './components/game-board';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Tic-Tac-Toe</h1>
       <GameBoard />
      </div>
    );
  }
}

export default App;
