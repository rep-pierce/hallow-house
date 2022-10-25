import React from "react";
// import handleRandomCandy from "./handleRandomCandy";
// import Candy from "./Candy";

function CandyBucket(){


    return (
        <div className="bucket-container">
            <img className="bucket" src="https://i.imgur.com/3ZwfAoM.png"></img>
            {/* { handleRandomCandy.length > 0 ? handleRandomCandy.map(candy => <Candy key={candy.name} image={candy.image} />) : null} */}
        </div>
    )
}

export default CandyBucket