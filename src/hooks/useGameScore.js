import {useState} from "react";

function useGameScore(initialVal) {
    // call useState, "reserve piece of state"
    const [state, setState] = useState(initialVal);

    const reset = () => {
        setState(initialVal)
    }
    
    const updateState = (data) =>{
        setState(data)
    }

    const addScore = (score) => {
        setState(initalState => initalState += score);
    };

    // return piece of state AND a function to toggle it
    return [state, reset, updateState, addScore];
}
export default useGameScore;