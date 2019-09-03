import React, { createContext } from "react";
import useGameScore from "../hooks/useGameScore";


export const GiphyContext = createContext();


export function GiphyProvider(props) {
  const [gameCard, resestGameCard, setGameCard] = useGameScore(new Set())

  
  return (<GiphyContext.Provider value={{ gameCard, resestGameCard, setGameCard }}>
    {props.children}
    
    </GiphyContext.Provider>);
}




