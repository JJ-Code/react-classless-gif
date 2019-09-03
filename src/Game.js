import React, { useContext } from "react";
import "./App.css";
import axios from "axios"
import Giphy from "./Giphy";
import useInputState from "./hooks/useInputState";
import { GiphyContext } from "./context/GameArrContext";



const Game = () => {
  const { gameCard, resestGameCard, setGameCard } = useContext(GiphyContext);
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


    async function performSearch() {

      resestGameCard()
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
                performSearch();
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
    <Giphy myDivToFocus={myDivToFocus}/> 
    </div> //end of main-game

  )//end of return 

} //end of Game 


export default Game; 
