import React, { useState } from "react";
import handleRandomCandy from "./handleRandomCandy";

function CandyBucket({ width, setWidth, energy, setEnergy, candies, setCandies }) {

    function handleDeleteCandy(deletedCandy) {
        setCandies(candies.filter((candy) => candy.id !== deletedCandy.id))
        if (energy + 40 > 100) {
            setEnergy(100)
        } else {
            setEnergy(energy + 40)
        }
        if (width + 160 > 400) {
            setWidth(400)
        } else {
            setWidth(width + 200)
        }
    }

    return (
        <div
            className="bucket-container"
        >
            <img
                className="bucket"
                src="https://i.imgur.com/3ZwfAoM.png"
            />
            {candies.map(candy =>
                <img
                    className="candy"
                    key={candy.id}
                    src={candy.image}
                    onClick={e => handleDeleteCandy(candy)}
                />)}
        </div>
    )
}
export default CandyBucket