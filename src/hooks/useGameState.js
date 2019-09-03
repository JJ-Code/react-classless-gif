import { useState, useContext } from "react";
import { GiphyContext } from "../context/GiphyArrContext";

export default initialGameData => {
  const [gameData, setGameData] = useState(initialGameData);
  const { shuffleGiphy } = useContext(GiphyContext)
  return {
    gameData,
    winLossReset: (status) => {
      setGameData(currentState =>{
        shuffleGiphy();
        (status === "win") ? alert("You win, awesome!") : alert("You did not win, boo!");
        const resetStatus = {
          computerScore: Math.floor(Math.random() * 102) + 19,
          userScore: 0,
          winScore: (status === "win") ? currentState.winScore += 1 : currentState.winScore,
          lossScore: (status === "loss") ? currentState.lossScore += 1 : currentState.lossScore,
        }
        return resetStatus;
      })
    },
    addUserScore: score => {
      setGameData(currentState => {
        let updateStatus = {
          computerScore: currentState.computerScore,
          userScore: currentState.userScore += score,
          winScore: currentState.winScore,
          lossScore: currentState.lossScore
        }
        return updateStatus;
      });
    }
  };
};