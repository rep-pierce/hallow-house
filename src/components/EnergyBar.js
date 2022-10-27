import React from "react";
import '../index.css'

function EnergyBar ({color, width, energy}) {
    
    return(
        <div className="energy">
            <span>
                <div className="bar"
                style={{ width:`${width}px`, backgroundColor:`${color}`}}
                tabIndex={0}>
                    Energy:{energy}%
                </div>
            </span>
        </div>
    )
}
export default  EnergyBar
