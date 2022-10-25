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
            <span>
                <div className="bar"
                style={{color: "white", width: `${width}px`,  fontSize: "50px", backgroundColor: "red"}}
                tabIndex={0}
                onKeyDown={handleKeyDown}>
                    Energy:{100}%
                </div>
            </span>
        </div>
    )
}
export default EnergyBar