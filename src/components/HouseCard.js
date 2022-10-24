import React from "react";

function HouseCard({house}) {

    function handleHouseClick(e){
        console.log(e.target)
    }

    return (
       <div className="house">
        <img onClick={handleHouseClick} className="house" alt="pic of house" src={house.image}/>
       </div> 
    )
}

export default HouseCard