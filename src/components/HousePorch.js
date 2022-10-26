import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import EnergyBar from "./EnergyBar";
import CandyBucket from "./CandyBucket";
import handleRandomCandy from "./handleRandomCandy";

function HousePorch({ width, setWidth, energy, setEnergy, candies, setCandies, currentPorch }) {

    const [porchBool, setPorchBool] = useState(1)

    const navigate = useNavigate()

    useEffect(() => {
        function handleKeyPress(e) {
            if (e.key === 'ArrowDown') {
                navigate('/spookystreet')
            }
            else if (e.key === ' ') {
                setPorchBool(porchBool - 1)
                if (porchBool === 1) {
                    setCandies(candies.concat(handleRandomCandy()))
                }
            }
        }

        document.addEventListener('keydown', handleKeyPress)

        return function cleanup() {
            document.removeEventListener('keydown', handleKeyPress)
        }
    })

    function handleDoorClick() {
        setPorchBool(porchBool - 1)
        if (porchBool === 1) {
            return setCandies(candies.concat(handleRandomCandy()))
        }
        alert(`you got ${candies.length} pieces of candy`)
    }
    let background = porchBool === 1 ? currentPorch.closed : currentPorch.open

    return (
        <div>

            <img onClick={handleDoorClick} src={background} style={{ width: '70%', height: '100%' }} />
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