import React from "react";
import "./App.css";





const MakeCard = (props) => {
    return(
        <div className={"col-lg-3 giphyDiv"}>
            <img src={`${props.url}`} data-id={props.id} key={props.id} className="giphyImage" alt="giphy" onClick={props.gamePlayHandleClick}/>
        </div>

    )

}

export default MakeCard;