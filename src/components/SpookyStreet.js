
import HouseCard from "./HouseCard"
import EnergyBar from "./EnergyBar"
import CandyBucket from "./CandyBucket"

function SpookyStreet({houses, setHouses, houseIndex, setHouseIndex}) {
    let start = houseIndex
    let end = houseIndex + 4

    function renderHouses(){
        const fourHouses = houses.slice(start, end)
        return fourHouses.map(house=><HouseCard key={house.id} house={house}
            />
        )
    }

    return (
        <div className="street">
            <div className="belt">
                {renderHouses()}
                <button onClick={() => setHouseIndex(houseIndex + 1)} onClick={()=> setHouseIndex(houseIndex+1)}>keep walkin</button>
            </div>
            <EnergyBar />
            <CandyBucket />
        </div>
    )
}

export default SpookyStreet