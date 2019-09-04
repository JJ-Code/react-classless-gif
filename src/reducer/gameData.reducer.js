// import { useContext } from "react";
// import { GiphyContext } from "../context/GiphyArrContext";



const gameDataReducer = (state, action) => {
  // const { shuffleGiphy } = useContext(GiphyContext)
  switch (action.type) {
    case "win":

    alert("You win, awesome!") 
      return state = {
          computerScore: Math.floor(Math.random() * 102) + 19,
          userScore: 0,
          winScore: state.winScore += 1,
          lossScore: state.lossScore
        };
    case "loss":
      alert("You did not win, boo!")
      return state = {
          computerScore: Math.floor(Math.random() * 102) + 19,
          userScore: 0,
          winScore: state.winScore,
          lossScore: state.lossScore += 1
        }

      ;

    case "addUserScore":
      return state = {
        computerScore: state.computerScore,
        userScore: state.userScore += action.userScore,
        winScore: state.winScore,
        lossScore: state.lossScore
      };


    default:
      return state;
  }
};
export default gameDataReducer;