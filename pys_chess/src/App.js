import logo from './logo.svg';
import './App.css';

import { useState } from "react";
// import Chess from "chess.js";
import {Chessboard} from "react-chessboard";




function App() {
  return (
    <div className="App">
      <div>
        <Chessboard id="BasicBoard"/>
      </div>
    </div>
  );
}

export default App;
