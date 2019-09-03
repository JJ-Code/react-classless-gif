import { useState } from "react";

export default initialGameData => {
  const [gameData, setGameData] = useState(initialGameData);
  return {
    gameData,
    winLossReset: (status) => {
      const restStatus = {
        computerScore: Math.floor(Math.random() * 102) + 19,
        userScore: 0,
        winScore: (status === "win") ? initialGameData.winScore += 1 : initialGameData.winScore,
        lossScore: (status === "loss") ? initialGameData.lossScore += 1 : initialGameData.lossScore,
      }
      setGameData(restStatus)
    },
    addUserScore: score => {
      setGameData(initialGameData => {
        let updateStatus = {
          computerScore: initialGameData.computerScore,
          userScore: initialGameData.userScore += score,
          winScore: initialGameData.winScore,
          lossScore: initialGameData.lossScore
        }
        return updateStatus;
      });
    }
  };
};