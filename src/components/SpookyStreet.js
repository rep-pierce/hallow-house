import React, { useEffect, useState } from "react";
import HouseCard from "./HouseCard"
import EnergyBar from "./EnergyBar"
import CandyBucket from "./CandyBucket"
import { Route } from "react-router-dom"

function SpookyStreet() {
    const [houses, setHouses] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3001/houses')
        .then(r=>r.json())
        .then(h=>setHouses(h))
    },[])

    function renderHouses(){
        return houses.map(house=><HouseCard key={house.id} house={house}
            />
        )
    }

    return (
        <div className="street">
            <div className="belt">
                {renderHouses()}
                <button>keep walkin</button>
            </div>
            <EnergyBar />
            <CandyBucket />
        </div>
    )
}

export default SpookyStreet