import React from "react";
import handleRandomCandy from "./handleRandomCandy";

function CandyBucket(){


    return (
        <div className="bucket-container" onClick={handleRandomCandy}>
            <img className="bucket" src="https://i.imgur.com/3ZwfAoM.png"></img>
        </div>
    )
}

export default CandyBucket