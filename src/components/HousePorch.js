import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import EnergyBar from "./EnergyBar";
import CandyBucket from "./CandyBucket";
import handleRandomCandy from "./handleRandomCandy";
import sound from "./../Door-knock-sound-effect.mp3"
import sound2 from "./../door-open-sound.mp3"

function HousePorch({ 
    width, 
    setWidth, 
    energy, 
    setEnergy, 
    candies, 
    setCandies, 
    currentPorch, 
    // direcs3, 
    // showDirecs3, 
    showDirecs4,
    color,
    setColor
}) {

    const [doorOpen, setDoorOpen] = useState('closed')
    const [message, setMessage] = useState(false)
    const [knocked, setKnocked] = useState(false)

    const navigate = useNavigate()

    const knockSound = new Audio(sound)
    const doorOpenSound = new Audio(sound2)

    const trickOrTreat = handleRandomCandy()
    
    useEffect(() => {
        function handleKeyPress(e) {
            if (e.key === 'ArrowDown') {
                navigate('/spookystreet')
                showDirecs4(true)
            }
            else if (e.key === ' ') {

                if (!knocked) {
                    knockSound.play()
                    // showDirecs3(false)
                    setTimeout(() => {
                        if (trickOrTreat.length === 0) {
                            setMessage(true)
                            setKnocked(true)
                        } else {
                            doorOpenSound.play()
                            setTimeout(() => {
                                setDoorOpen('open')
                                setCandies(candies.concat(trickOrTreat))
                                setKnocked(true)
                            }, 1000)
                        }
                    }, 2000)
                }
            }
        }

        document.addEventListener('keydown', handleKeyPress)

        return function cleanup() {
            document.removeEventListener('keydown', handleKeyPress)
        }
    })

    // function handleDoorClick() {
    //     if (!knocked) {
    //         knockSound.play()
    //         showDirecs3(false)
    //         setTimeout(() => {
    //             if (trickOrTreat.length === 0) {
    //                 setMessage(true)
    //             } else {
    //                 doorOpenSound.play()
    //                 setTimeout(() => {
    //                     setDoorOpen(true)
    //                     setCandies(candies.concat(trickOrTreat))
    //                     setKnocked(true)
    //                 }, 1000)
    //             }
    //         }, 2000)
    //     }
    // }

    function background() {
        if (doorOpen === 'closed'){
            return currentPorch.closed
        }else if (doorOpen === 'open'){
            return currentPorch.open
        }else if(doorOpen === 'tpd'){
            return currentPorch.tpd
        }
    }


    useEffect(() => {
        if(width >= 0 & energy >= 75){
            setColor("green")
        }
        if(width >= 0 & energy > 25 & energy < 75){
            setColor("orange")
        }
        if(width >= 0 & energy <= 25 & energy >=1){
            setColor("red")
        }
    })

    function handleTP() {
        setMessage(false)
        setEnergy(energy -25)
        setWidth(width-125)
        setDoorOpen('tpd')
    }

    function handleNo() {
        navigate('/spookystreet')
    }

    return (
        <div>
            {/* {direcs3 ? <div className="directions">spacebar to knock!</div> : null} */}
            {message ? <div className="no-candy">they didn't answer 💀<br></br>should we tp them?🧻 <button onClick={handleTP}>Yes</button> <button onClick={handleNo}>No</button></div> : null}
            {/* {knocked ? <button onClick={backClick} className="back-button">↓back↓to the streets</button> : null} */}
            <img src={background()} style={{ width: '70%', height: '100%' }} />
            {<EnergyBar
                width={width}
                setWidth={setWidth}
                energy={energy}
                setEnergy={setEnergy}
                color={color}
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