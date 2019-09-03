import React, { createContext } from "react";
import useGiphyArr from "../hooks/useGiphyArr";


export const GiphyContext = createContext();


export function GiphyProvider(props) {
	// const defaultState = {
	//   id: "",
	//   url: "",
	// 	pts: Math.floor(Math.random() * 12) + 1,
	//   restGame: false
	// }

	const { gameCard, resestGameCard, setGameCard, shuffleGiphy } = useGiphyArr(new Set())


	return (<GiphyContext.Provider value={{ gameCard, resestGameCard, setGameCard, shuffleGiphy }}>
		{props.children}

	</GiphyContext.Provider>);
}



