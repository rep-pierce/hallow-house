
import HouseCard from "./HouseCard"
import EnergyBar from "./EnergyBar"
import CandyBucket from "./CandyBucket"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function SpookyStreet({ houses, houseIndex, setHouseIndex, ghostLoc, setGhostLoc, width, setWidth, energy, setEnergy, candies, setCandies, setCurrentPorch }) {
    let start = houseIndex
    let end = houseIndex + 4

    let nextId = 3
    const housePorches = [
        {closed: "https://i.imgur.com/8gKB2e1.jpg", open: "https://i.imgur.com/Gj4rbsx.jpg"},
        {closed: "https://i.imgur.com/qykF5SL.jpg", open: "https://i.imgur.com/oSo8nFM.jpg"},
        {closed: "https://i.imgur.com/ePkGC0v.jpg", open: "https://i.imgur.com/35Aa1oc.jpg"}
        ]
      
    function getNewRandomBackground() {
      const index = Math.floor(Math.random() * housePorches.length);
      const porchBackground = { ...housePorches[index] };
      porchBackground.id = nextId;
      nextId++;
      return porchBackground;
    }

    const navigate = useNavigate()

    function renderHouses() {
        const fourHouses = houses.slice(start, end)
        return fourHouses.map(house => <HouseCard key={house.id} house={house}
        />
        )
    }

    useEffect(() => {
        function handleKeyPress(e) {
            if (e.key === 'ArrowRight') {
                setGhostLoc(ghostLoc + 5)
                setWidth((width) => width - 4)
                setEnergy((energy) => energy - 1)
            }
            else if (e.key === 'ArrowLeft') {
                setGhostLoc(ghostLoc - 5)
                setWidth((width) => width - 4)
                setEnergy((energy) => energy - 1)
            }
            else if (e.key === 'ArrowUp') {
                setCurrentPorch(getNewRandomBackground())
                navigate('/porch')
            }
        }


        document.addEventListener('keydown', handleKeyPress)

        return function cleanup() {
            document.removeEventListener('keydown', handleKeyPress)
        }
    })

    if (ghostLoc > 680) {
        setGhostLoc(-590)
        setHouseIndex(houseIndex + 4)
    }

    if (ghostLoc < -595) {
        setGhostLoc(675)
        setHouseIndex(houseIndex - 4)
    }

    if (energy<1){
        alert("You are DEAD!")
    }

    let Username = "Spooky";
    let TotalCandy = 15;

    return (
        <div>
            <div className="belt">
                {renderHouses()}
                <button className="more-button" onClick={() => setHouseIndex(houseIndex + 1)}>keep walkin</button>
            </div>
            <div className="road-div">
                <img
                    src="https://cliparting.com/wp-content/uploads/2016/10/Road-bitumen-clipart-by-megapixl.jpg"
                    style={{ width: "100%", height: "150px", position: "absolute", left: "0%" }}
                />
                <img
                    src="https://i.imgur.com/2TOqj6t.png"
                    className="avatar"
                    style={{ left: `${ghostLoc}px` }}
                />
            </div>
            <div className="grass">.</div>
            <div>
            <h3 className="userh3">Username: {Username}</h3>
            </div>
            <EnergyBar
                width={width}
                setWidth={setWidth}
                energy={energy}
                setEnergy={setEnergy}
            />
            <CandyBucket
                width={width}
                setWidth={setWidth}
                energy={energy}
                setEnergy={setEnergy}
                candies={candies}
                setCandies={setCandies}
            />
        </div>
    )
}

export default SpookyStreet