import React, { createContext, useReducer } from "react";
import gameCardReducer from "../reducer/gameCard.reducer";


export const GiphyContext = createContext();


export function GiphyProvider(props) {
	// const defaultState = {
	//   id: "",
	//   url: "",
	// 	pts: Math.floor(Math.random() * 12) + 1,
	//   restGame: false
	// }
	const [gameCard, dispatch] = useReducer(gameCardReducer, new Set());


	return (<GiphyContext.Provider value={{ gameCard, dispatch }}>
		{props.children}

	</GiphyContext.Provider>);
}



