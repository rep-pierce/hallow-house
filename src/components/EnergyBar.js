import React from "react";

function EnergyBar () { 

    
    return(
        <div className="energy" >
            <span>Energy:{100}%
                <div className="bar" style={{color: "red", width: "250px"}}>
                </div>
            </span>
        </div>
    )
}

export default EnergyBar