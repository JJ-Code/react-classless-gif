import {
    useState
} from "react";

export default initialTodos => {
    const [gameData, setGameData] = useState(initialTodos);
    return {
        gameData,
        reset: resetScore => {
            setGameData(setGameData)
        },
        addUserScore: score => {
            setGameData(initalState => {
                initalState += score
            });
        },
        updateState: state => {
            setGameData(state)
        }
    };
};