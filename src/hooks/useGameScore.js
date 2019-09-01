import {useState} from "react";

function useGameScore(initialVal) {
    // call useState, "reserve piece of state"
    const [state, setState] = useState(initialVal);

    const reset = () => {
        setState(initialVal)
    }

    const addScore = (score) => {
        setState(initalState => initalState += score);
    };

    // return piece of state AND a function to toggle it
    return [state, reset, addScore];
}
export default useGameScore;