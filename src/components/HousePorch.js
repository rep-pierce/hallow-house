import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import EnergyBar from "./EnergyBar";
import CandyBucket from "./CandyBucket";
import handleRandomCandy from "./handleRandomCandy";

function HousePorch({ width, setWidth, energy, setEnergy, candies, setCandies, currentPorch }) {

    const [doorOpen, setDoorOpen] = useState(false)
    const [noCandy, setNoCandy] = useState(false)
    const [message, setMessage] = useState(false)
    const [knocked, setKnocked] = useState(false)

    const navigate = useNavigate()

    const trickOrTreat = handleRandomCandy()
    useEffect(() => {
        function handleKeyPress(e) {
            if (e.key === 'ArrowDown') {
                navigate('/spookystreet')
            }
            // else if (e.key === ' ') {
            //     setPorchBool(porchBool - 1)
            //     if (porchBool === 1) {
            //         setCandies(candies.concat(handleRandomCandy()))
            //     }
            // }
        }

        document.addEventListener('keydown', handleKeyPress)

        return function cleanup() {
            document.removeEventListener('keydown', handleKeyPress)
        }
    })

    function handleDoorClick() {
        if (!knocked) {
            if (trickOrTreat.length === 0) {
                // console.log('no candy!')
                // alert("sorry sucker!")
                setMessage(true)

                // setPorchBool(porchBool - 1)
                
            } else {
                setDoorOpen(true)
                setCandies(candies.concat(trickOrTreat))
            }
            setKnocked(true)
        }
    }
    let background = !doorOpen ? currentPorch.closed : currentPorch.open

    return (
        <div>
            {message ? <div className="no-candy">no candies sucker</div>:null}
            <img onClick={handleDoorClick} src={background} style={{ width: '70%', height: '100%' }} />
            {noCandy ? <p>no candy!</p>:null}
            {<EnergyBar
                width={width}
                setWidth={setWidth}
                energy={energy}
                setEnergy={setEnergy}
            />}
            {<CandyBucket
                width={width}
                setWidth={setWidth}
                energy={energy}
                setEnergy={setEnergy}
                candies={candies}
                setCandies={setCandies}
            />}
        </div>
    )
}

export default HousePorch