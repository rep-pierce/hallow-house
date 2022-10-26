import React, { useEffect, useState } from "react";
import '../index.css'

function EnergyBar ({width, setWidth, energy, setEnergy}) {
    
    // useEffect(() => {
    //     function handleKeyDown(e){
    //         if(width >= 0 & energy >0){
    //             setWidth((width) => width - 4)
    //             setEnergy((energy) => energy - 1)}
    //         else{
    //             alert("You are DEAD!")
    //         }
    //     }

    //     document.addEventListener('keydown', handleKeyDown)

    //     return function cleanup() {
    //         document.removeEventListener('keydown', handleKeyDown)}})
    
    return(
        <div className="energy">
            <span>
                <div className="bar"
                style={{ width:`${width}px`}}
                tabIndex={0}>
                    Energy:{energy}%
                </div>
            </span>
        </div>
    )
}
export default  EnergyBar
