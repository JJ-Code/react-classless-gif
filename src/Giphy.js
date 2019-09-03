import React, { useContext } from "react";
import "./App.css";
import MakeCard from "./MakeCard";
import { GiphyContext } from "./context/GameArrContext";


const Giphy = (props) => {

  const { gameCard, resestGameCard, computerScore, resetComputerScore, userScore, resetUserScore, addUserScore, winScore, setWinScore, lossScore, setLossScore } = useContext(GiphyContext);

  console.log(userScore)


  const win = () => {
    setWinScore(1)
    resetGiphy("You win!");
  }

  const loss = () => {
    setLossScore(1)
    resetGiphy("You did not win, loser!");
  }

  const resetGiphy = (message) => {
    alert(message);
    resetUserScore();
    resetComputerScore();
    return () => resestGameCard();
  };


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

    console.log(userScore);

    addUserScore(gameCard[foundPic].pts);

    //(userScore === computerScore) ? win() : loss();
    if (userScore === computerScore) {
      win();
    } else if (userScore > computerScore) {
      loss();
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
              <h2 className="computer-score"> {computerScore}</h2>

              <div></div>
            </div>

            <div className="col-md-4">
              <h2>Your current score: </h2>
              <h2 className="user-score">{userScore}</h2>
            </div>
            <div className="col-md-4">
              <h2>Score Tracker</h2>
              <h3>Wins: </h3>
              <h3 className="win-score"> {winScore} </h3>

              <h3>Losses: </h3>
              <h3 className="loss-score">{lossScore} </h3>
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




export default Giphy;