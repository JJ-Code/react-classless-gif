import React from 'react';
import './App.css';
import Footer from "./Footer";
import Game from "./Game";
import {GiphyProvider} from "./context/GameArrContext";

function App() {
  return (
    <div className="App">
      <GiphyProvider >
      <Game />
      </ GiphyProvider>
      <Footer />
    </div>
  );
}

export default App; 