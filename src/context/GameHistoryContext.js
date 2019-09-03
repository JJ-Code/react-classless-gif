import React, { createContext } from "react";
import useGameState from "../hooks/useGameState";

export const GameContext = createContext();

export function GameProvider(props) {
  const defaultState = {
    computerScore: Math.floor(Math.random() * 102) + 19,
    userScore: 0,
    winScore: 0,
    lossScore: 0
  }

  const { gameData, winLossReset, addUserScore} = useGameState(defaultState)

  return (<GameContext.Provider
    value={{gameData, winLossReset, addUserScore}}>
    {props.children}</GameContext.Provider>);
}