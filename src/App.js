import React from 'react';
import './App.css';
import Footer from "./Footer";
import Game from "./Game";
import { GiphyProvider } from "./context/GameArrContext";
import { GameProvider } from "./context/GameHistoryContext";

function App() {
  return (
    <div className="App">
      <GiphyProvider >
        <GameProvider>
          <Game />
        </GameProvider>
      </ GiphyProvider>
      <Footer />
    </div>
  );
}

export default App; 