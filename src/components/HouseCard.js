import React from "react";
import { useNavigate } from "react-router-dom"

function HouseCard({house}) {

    const navigate = useNavigate()

    function handleHouseClick(e){
        console.log(e.target)
        navigate('/porch')
    }

    return (
       <div className="house">
        <img onClick={handleHouseClick} className="house" alt="pic of house" src={house.image}/>
       </div> 
    )
}

export default HouseCard