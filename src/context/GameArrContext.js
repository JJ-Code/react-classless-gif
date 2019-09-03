import React, { createContext } from "react";
import useGameScore from "../hooks/useGameScore";

export const GiphyContext = createContext();

export function GiphyProvider(props) {
  const [gameCard, resestGameCard, setGameCard] = useGameScore(new Set())
  const [computerScore, resetComputerScore] = useGameScore(Math.floor(Math.random() * 102) + 19)
  const [userScore, resetUserScore, updateUserScore, addUserScore] = useGameScore(0)
  const [winScore, resetWinScore, updateWScore, setWinScore] = useGameScore(0)
  const [lossScore, resetLossScore, updateLScore, setLossScore] = useGameScore(0)
  return (<GiphyContext.Provider
    value={{
      gameCard, resestGameCard, setGameCard,
      computerScore, resetComputerScore,
      userScore, resetUserScore, updateUserScore, addUserScore,
      winScore, resetWinScore, updateWScore, setWinScore,
      lossScore, resetLossScore, updateLScore, setLossScore
    }}>
    {props.children}</GiphyContext.Provider>);
}