import { useState } from "react";

function useGameScore(initialVal) {
    // call useState, "reserve piece of state"
    const [state, setState] = useState(initialVal);

    const reset = () => {
        setState(initialVal)
    }

    // const updateState = (data) =>{
    //     setState(data)
    // }

    const updateState = (results) => {
        setState(results.map((result) => {
            return {
                url: result.images.original.url,
                id: result.id,
                pts: Math.floor(Math.random() * 12) + 1
            }
        }))
    }

    const suffleCardPts = () => {
        setState((curr) => {
            return curr.sort((a, b) => 0.5 - Math.random()).map((card) => {
                return {
                    url: card.url,
                    id: card.id,
                    pts: Math.floor(Math.random() * 12) + 1
                }
            })
        })
    }




    const addScore = (score) => {
        setState(initalState => initalState += score);
    };

    // return piece of state AND a function to toggle it
    return [state, reset, updateState, suffleCardPts, addScore];
}
export default useGameScore;