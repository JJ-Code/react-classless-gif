import React, { useContext, memo } from "react";
import "./App.css";
import MakeCard from "./MakeCard";
import { GiphyContext } from "./context/GiphyArrContext";
import { GameContext } from "./context/GameHistoryContext";

const Giphy = (props) => {
  const { gameCard } = useContext(GiphyContext)
  const { gameData, winLossReset, addUserScore } = useContext(GameContext)

  console.log(gameData)




  const gifCard = () => {
    console.log(gameCard)
    if (gameCard.length !== 8) {
      return (<h2>Loading...</h2>)
    }
    else {
      return gameCard.map(card => (
        <MakeCard key={card.id}
          id={card.id}
          url={card.url}
          pts={card.pts}
          gamePlayHandleClick={gamePlayHandleClick} />
      ))

    }
  }

  const gamePlayHandleClick = (evt) => {
    // console.log(evt)
    // console.log(evt.target.dataset.id);
    const idPic = evt.target.dataset.id; //mouse object location in array
    const foundPic = gameCard.findIndex(gifPic => {
      //console.log(gifPic.id === idPic)
      return gifPic.id === idPic
    });
    //console.log(gameData.userScore);
    console.log(gameCard[foundPic].pts);
    addUserScore(gameCard[foundPic].pts);
    if (gameData.userScore === gameData.computerScore) {
      winLossReset("win");
    } else if (gameData.userScore > gameData.computerScore) {
      winLossReset("loss");
    }
  }



  return (
    <div className="container" ref={props.myDivToFocus}>
      <section>
        <div className="content" id="main-game">
          <div className="row">
            <h1>Step 2 - Click on giphy to match SCORE to WIN! </h1> <br /><br />
            <div className="col-md-4">
              <h2>Try to match</h2>
              <h2 className="computer-score"> {gameData.computerScore}</h2>

              <div></div>
            </div>

            <div className="col-md-4">
              <h2>Your current score: </h2>
              <h2 className="user-score">{gameData.userScore}</h2>
            </div>
            <div className="col-md-4">
              <h2>Score Tracker</h2>
              <h3>Wins: </h3>
              <h3 className="win-score"> {gameData.winScore} </h3>

              <h3>Losses: </h3>
              <h3 className="loss-score">{gameData.lossScore} </h3>
            </div>
          </div>

          {/* <!-- GIF RESULTS GAME--> */}
          <div className="row" id="giphy-view">

            {gifCard()}

          </div>


        </div>
      </section>
    </div>//end of 

  )


}//end of giphy 




export default memo(Giphy);