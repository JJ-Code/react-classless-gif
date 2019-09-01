import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"
import Giphy from "./Giphy";
import useInputState from "./hooks/useInputState";




const Game = () => {
  const [gameCard, setGameCard] = useState(new Set());
  const [searchWord, handleSearch, resetSearch] = useInputState("");
  let myDivToFocus = React.createRef();

 

  const jumpto = (evt) => {
    //.current is verification that your element has rendered
    if (myDivToFocus.current) {
      myDivToFocus.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      })
    }
  }

  const resetGame = () => {
    setGameCard(new Set())
  };




  useEffect(() => {

    async function getData() {

      resetGame()
      let url = "https://api.giphy.com/v1/gifs/search?q="
      let apiKey = "&api_key=39a3e436bae449eebf5904e0af9ad67c&limit=8";
      let urlToFetch = `${url}${searchWord}${apiKey}`;
      const response = await axios.get(urlToFetch);
      let results = response.data.data
      setGameCard(results.map((result)=>{
        return {url: result.images.original.url,
        id: result.id,
        pts: Math.floor(Math.random() * 12) + 1}
      }));

    }
    if (searchWord.length > 0) getData() 
    
    //getData() 

    return ()=>{
      //resetGame();
    
    }

  }, [searchWord]);

  console.log(searchWord);
  console.log(gameCard);




  return (

    <div id="search-game">
      <div className="landing--container">
        <div className="landing--title">
          <h1>Giphy GAME TIME!</h1>
          <p>Step 1: Enter a word</p><br />
          <div id="search-area">
            <form id="giphy-form"
              onSubmit={e => {
                e.preventDefault();
                resetSearch(e);
                jumpto(e);
              }}
            >
              <input
                type='text'
                name='searchGiphy'
                value={searchWord}
                onChange={handleSearch}
                id='giphy-input'
              /> <br /> <br />
              <button className="primary-btn" id="submit-giphy">Submit</button>
            </form>
          </div>
        </div>
      </div>
    <Giphy myDivToFocus={myDivToFocus} gameCard={gameCard} resetGame={resetGame} />
    </div> //end of main-game

  )//end of return 








} //end of Game 





// class Game extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchGiphy: "",
//       gameCard: new Set(),
//       loading: false
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.performSearch = this.performSearch.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.myDivToFocus = React.createRef(this);
//     this.resetGame = this.resetGame.bind(this);
//   }

//   jumpto(evt) {
//     //.current is verification that your element has rendered
//     if (this.myDivToFocus.current) {
//       this.myDivToFocus.current.scrollIntoView({
//         behavior: "smooth",
//         block: "nearest"
//       })
//     }

//   }
//   resetGame() {
//     this.setState({
//       searchGiphy: "",
//       gameCard: new Set(),
//       loading: false
//     })

//   };


//   handleChange(evt) {
//     console.log(evt)
//     this.setState({
//       [evt.target.name]: evt.target.value
//     });
//   }
//   handleSubmit(evt) {
//     console.log(evt)
//     evt.preventDefault();
//     this.performSearch();
//     evt.target.reset();
//     this.jumpto(evt)
//   }


//   async performSearch(wordSearch = "example") {
//     this.resetGame();
//     console.log(wordSearch)
//     wordSearch = this.state.searchGiphy
//     let url = "https://api.giphy.com/v1/gifs/search?q="
//     let apiKey = "&api_key=39a3e436bae449eebf5904e0af9ad67c&limit=8";
//     let urlToFetch = `${url}${wordSearch}${apiKey}`;
//     let gameCard2 = [];
//     try {
//       let responses = await axios.get(urlToFetch);
//       //console.log(responses.data.data);
//       let results = responses.data.data;
//       while (gameCard2.length < results.length) {
//         let gifObj = {
//           url: results[gameCard2.length].images.original.url,
//           id: results[gameCard2.length].id,
//           pts: Math.floor(Math.random() * 12) + 1
//         }
//         gameCard2.push(gifObj)
//         console.log(gifObj.pts);
//       }

//       this.setState(st => ({
//         loading: true,
//         gameCard: [...st.gameCard, ...gameCard2]
//       }));

//       console.log(this.state.gameCard);
//     }//end of try 

//     catch (e) {
//       alert(e);
//       this.setState({ loading: false });
//     }

//     document.getElementById("giphy-input").value = '';
//   };

//   render() {
//     return (
//       <div id="search-game">
//         <div className="landing--container">
//           <div className="landing--title">
//             <h1>Giphy GAME TIME!</h1>
//             <p>Step 1: Enter a word</p><br />
//             <div id="search-area">
//               <form id="giphy-form" onSubmit={this.handleSubmit}>
//                 {/* <input type="text" id="giphy-input" /><br /> <br />
//                             <input className="primary-btn" id="submit-giphy" type="submit" value="Submit" onclick="jumpto('main-game');" /> */}
//                 <input
//                   type='text'
//                   name='searchGiphy'
//                   value={this.state.searchGiphy}
//                   onChange={this.handleChange}
//                   id='giphy-input'
//                 /> <br /> <br />
//                 <button className="primary-btn" id="submit-giphy">Submit</button>
//               </form>
//             </div>
//           </div>
//         </div>
//         <Giphy myDivToFocus={this.myDivToFocus} loading={this.state.loading} gameCard={this.state.gameCard} resetGame={this.resetGame} />
//       </div> //end of main-game

//     )//end of return 
//   }
// }


export default Game; 
