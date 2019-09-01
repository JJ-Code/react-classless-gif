import React, { useState } from "react";
import "./App.css";
import MakeCard from "./MakeCard";



const Giphy = (props) => {
  const [gameData, setData] = useState({
    computerScore: Math.floor(Math.random() * 102) + 19,
    userScore: 0
  })

  const [gameHistory, setGameHistory] = useState({
    winScore: 0,
    lossScore: 0,
  })

  console.log(gameData.computerScore)


  const win = () => {
    setGameHistory(st => ({
      winScore: st.winScore += 1,
      lossScore: st.lossScore
    }))
    alert("You win!");
    resetGiphy();
    return () => props.restGame();
  }

  const loss = () => {
    setGameHistory(st => ({
      winScore: st.winScore,
      lossScore: st.lossScore += 1
    }))
    alert("You did not win, loser!");
    resetGiphy();
    return () => props.restGame();
  }

  const resetGiphy = () => {
    setData({
      userScore: 0,
      computerScore: Math.floor(Math.random() * 102) + 19,
    })
  };


  const gifCard = () => {
    console.log(props.gameCard)
    if (props.gameCard.length !== 8) {
      return (<h2>Loading...</h2>)
    }

    else {

     return props.gameCard.map(card => (
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
    const foundPic = props.gameCard.findIndex(gifPic => {
      console.log(gifPic.id === idPic)
      return gifPic.id === idPic
    });
    setData(st => ({
      userScore: st.userScore += props.gameCard[foundPic].pts,
      computerScore: st.computerScore
    }))
    //(this.state.userScore > this.state.computerScore) ? this.state.loss() : this.state.win();
    if (gameData.userScore === gameData.computerScore) {
      win();
    } else if (gameData.userScore > gameData.computerScore) {
      loss();
    }
    console.log(gameData);
    console.log(gameData);
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
              <h3 className="win-score"> {gameHistory.winScore} </h3>

              <h3>Losses: </h3>
              <h3 className="loss-score">{gameHistory.lossScore} </h3>
            </div>
          </div>

          {/* <!-- GIF RESULTS GAME--> */}
          <div className="row">

            <div id="giphy-view">
              {gifCard()}
            </div>

          </div>


        </div>
      </section>
    </div>//end of 

  )


}//end of giphy 




export default Giphy;