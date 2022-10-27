import React from "react";

function HouseCard({house}) {

    return (
       <div className="house">
        <img className="house" alt="pic of house" src={house.image}/>
       </div> 
    )
}

export default HouseCard