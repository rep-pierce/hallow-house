import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import EnergyBar from "./EnergyBar";
import CandyBucket from "./CandyBucket";

function HousePorch({ width, setWidth, energy, setEnergy, candies, setCandies }{ currentPorch }) {

    const [porchBool, setPorchBool] = useState(1)

    const navigate = useNavigate()

    function goBackClick() {
        navigate('/spookystreet')
    }

    useEffect(() => {
        function handleKeyPress(e) {

            if (e.key === 'ArrowDown') {
                navigate('/spookystreet')
            }
        }

        document.addEventListener('keydown', handleKeyPress)

        return function cleanup() {
            document.removeEventListener('keydown', handleKeyPress)
        }
    })
    let background = porchBool === 1 ? currentPorch.closed : currentPorch.open
    return (
        <div>

            <img onClick={() => setPorchBool(porchBool - 1)} src={background} style={{ width: '70%', height: '100%' }} />
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