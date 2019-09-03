const gameCardReducer = (state, action) => {
  // const { shuffleGiphy } = useContext(GiphyContext)
  switch (action.type) {
    case "resestGameCard":
      return state = new Set();

    case "setGameCard":
      return action.state.map((result) => {
          return {
            url: result.images.original.url,
            id: result.id,
            pts: Math.floor(Math.random() * 12) + 1
          }
        });

    case "shuffleGiphy":
      return state.sort((a, b) => 0.5 - Math.random()).map((card) => {
          return {
            url: card.url,
            id: card.id,
            pts: Math.floor(Math.random() * 12) + 1
          }
        });
        
    default:
      return state;
  }
};
export default gameCardReducer;