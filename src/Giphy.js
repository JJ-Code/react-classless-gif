import React, { Component } from "react";
import "./App.css";
import MakeCard from "./MakeCard";



class Giphy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            computerScore: Math.floor(Math.random() * 102) + 19,
            winScore: 0,
            lossScore: 0,
            userScore: 0
        };
        this.click = this.click.bind(this);
        this.gifCard = this.gifCard.bind(this);
        this.gamePlayHandleClick = this.gamePlayHandleClick.bind(this);
    }

    click() {
        console.log(this.props.gameCard[0])

    }
    
    
    win() {
        this.setState(st => ({
            winScore: st.winScore += 1
        }))
        alert("You win!");
        this.resetGiphy();
        return () => this.props.restGame();
    }

    loss() {
        this.setState(st => ({
            lossScore: st.lossScore += 1
        }))
        alert("You did not win, loser!");
        this.resetGiphy();
        return () => this.props.restGame();
    }

    resetGiphy() {
        this.setState({
            userScore: 0,
            computerScore: Math.floor(Math.random() * 102) + 19,
        })
    };


    gifCard() {
        return this.props.gameCard.map(card => (
            <MakeCard
                key={card.id}
                id={card.id}
                url={card.url}
                pts={card.pts}
                gamePlayHandleClick={this.gamePlayHandleClick}

            />
        ))
    }

    gamePlayHandleClick(evt) {
        // console.log(evt)
        // console.log(evt.target.dataset.id);
        const idPic = evt.target.dataset.id; //mouse object location in array
        const foundPic = this.props.gameCard.findIndex(gifPic => {
            console.log(gifPic.id === idPic)
            return gifPic.id === idPic
        });
        this.setState(st => ({
            userScore: st.userScore += this.props.gameCard[foundPic].pts
        }))
            //(this.state.userScore > this.state.computerScore) ? this.state.loss() : this.state.win();
        if (this.state.userScore === this.state.computerScore) {
            this.win();
        } else if (this.state.userScore > this.state.computerScore) {
            this.loss();
        }
        console.log(this.state.userScore);
    }

    render() {


        return (
            <div className="container" ref={this.props.myDivToFocus}>
                <section>
                    <div className="content" id="main-game">
                        <div className="row">
                            <h1>Step 2 - Click on giphy to match SCORE to WIN! </h1> <br /><br />
                            <div className="col-md-4">
                                <h2>Try to match</h2>
                                <h2 className="computer-score"> {this.state.computerScore}</h2>

                                <div></div>
                            </div>

                            <div className="col-md-4">
                                <h2>Your current score: </h2>
                                <h2 className="user-score">{this.state.userScore}</h2>
                            </div>
                            <div className="col-md-4">
                                <h2>Score Tracker</h2>
                                <h3>Wins: </h3>
                                <h3 className="win-score"> {this.state.winScore} </h3>

                                <h3>Losses: </h3>
                                <h3 className="loss-score">{this.state.lossScore} </h3>
                            </div>
                        </div>

                        {/* <!-- GIF RESULTS GAME--> */}
                        <div className="row">

                            <div id="giphy-view">
                                {(this.props.loading === false) ? <h2>Loading...</h2> : this.gifCard()}


                            </div>

                        </div>


                    </div>
                </section>
            </div>//end of 

        )


    }

}//end of giphy 


export default Giphy; 
