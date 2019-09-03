import { useState } from "react";

export default initalGiphyArr => {
  const [gameCard, setState] = useState(initalGiphyArr);


  return {
    gameCard,
    resestGameCard: () => {
      setState(initalGiphyArr)
    },
    setGameCard: (results) => {
      setState(results.map((result) => {
        return {
          url: result.images.original.url,
          id: result.id,
          pts: Math.floor(Math.random() * 12) + 1
        }
      }))
    }, 
    shuffleGiphy: () => {
      return setState((curr) => {
        return curr.sort((a, b) => 0.5 - Math.random()).map((card) => {
          return {
            url: card.url,
            id: card.id,
            pts: Math.floor(Math.random() * 12) + 1
          }
        })
      })
    }

}//end of return
};