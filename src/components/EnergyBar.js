import React, { useState } from "react";
import '../index.css'

function EnergyBar () {
    const [width, setWidth] = useState("400")
    const [energy, setEnergy] = useState("100")


    function handleKeyDown(e){
        if(width >= 0 & energy >0){
            setWidth((width) => width - 4)
            setEnergy((energy) => energy - 1)}
        else{
            
            alert("You are DEAD!")
        }
    }

    

    return(
        <div className="energy" >
            <span>
                <div className="bar"
                style={{color: "white", width: `${width}px`,  fontSize: "50px", backgroundColor: "red"}}
                tabIndex={0}
                onKeyDown={handleKeyDown}>
                    Energy:{energy}%
                </div>
            </span>
        </div>
    )
}
export default EnergyBar
