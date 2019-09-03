import React, { createContext, useReducer } from "react";
import gameDataReducer from "../reducer/gameData.reducer";

export const GameContext = createContext();

const defaultState = {
  computerScore: Math.floor(Math.random() * 102) + 19,
  userScore: 0,
  winScore: 0,
  lossScore: 0
}

export function GameProvider(props) {

  const [gameData, dispatch] = useReducer(gameDataReducer, defaultState);


  return (<GameContext.Provider
    value={{gameData, dispatch}}>
    {props.children}</GameContext.Provider>);
}