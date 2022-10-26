import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../index.css'

function EnergyBar () {
    const [width, setWidth] = useState("500")
    const [energy, setEnergy] = useState("100")

    const navigate = useNavigate()

    
    useEffect(() => {
        function handleKeyDown(e){
            if(width >= 0 & energy >0){
                setWidth((width) => width - 5)
                setEnergy((energy) => energy - 1)}
            else{
                navigate("/GameOver")
            }
        }

        document.addEventListener('keydown', handleKeyDown)

        return function cleanup() {
            document.removeEventListener('keydown', handleKeyDown)}})
    
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
