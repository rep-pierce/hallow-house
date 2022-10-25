import React, { useState } from "react";
import '../index.css'

function EnergyBar () {
    const [width, setWidth] = useState("250")


    function handleKeyDown(e){
        if(width >= 0){
        setWidth((width) => width - 10)}
        else{
            
            alert("You are DEAD!")
        }
    }

    

    return(
        <div className="energy" >
            <span>Energy:{100}%
                <div className="bar" 
                style={{color: "black", width: `${width}px`}} 
                tabIndex={0} 
                onKeyDown={handleKeyDown}>
                    keep going!
                </div>
            </span>
        </div>
    )
}

export default EnergyBar