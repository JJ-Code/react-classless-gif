import React, { createContext } from "react";
import useGameScore from "../hooks/useGameScore";


export const GiphyContext = createContext();


export function GiphyProvider(props) {
  const [gameCard, resestGameCard, setGameCard, shuffleGiphy] = useGameScore(new Set())


  return (
    <GiphyContext.Provider value={{ gameCard, resestGameCard, setGameCard, shuffleGiphy }}>
      {props.children}
    </GiphyContext.Provider>
  )
};




