import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import EnergyBar from "./EnergyBar";
import CandyBucket from "./CandyBucket";
import handleRandomCandy from "./handleRandomCandy";
import sound from "./../Door-knock-sound-effect.mp3"
import sound2 from "./../door-open-sound.mp3"
import Songbar from "./Songbar";

function HousePorch({ 
    width, 
    setWidth, 
    energy, 
    setEnergy, 
    candies, 
    setCandies, 
    currentPorch, 
    color,
    setColor,
    handleSongClick,
    playing
}) {

    const [doorOpen, setDoorOpen] = useState(false)
    const [message, setMessage] = useState(false)
    const [knocked, setKnocked] = useState(false)
    const [tooMuchCandyMessage, setTooMuchCandyMessage] = useState(false)

    const navigate = useNavigate()

    const knockSound = new Audio(sound)
    const doorOpenSound = new Audio(sound2)

    const trickOrTreat = handleRandomCandy()
    
    useEffect(() => {
        function handleKeyPress(e) {
            if (e.key === 'ArrowDown') {
                navigate('/spookystreet')
            }
            else if (e.key === ' ') {

                if (!knocked) {
                    knockSound.play()
                    setTimeout(() => {
                        if (trickOrTreat.length === 0) {
                            setMessage(true)
                            setKnocked(true)
                        } else {
                            doorOpenSound.play()
                            setTimeout(() => {
                                setDoorOpen(true)
                                setKnocked(true)
                                if (candies.length<13) {
                                setCandies(candies.concat(trickOrTreat))
                                }
                                else {
                                    setTooMuchCandyMessage(true)
                                }
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

    function backClick() {
        navigate('/spookystreet')

    }
    let background = !doorOpen ? currentPorch.closed : currentPorch.open
    if(width >= 0 & energy >= 75){
        setColor("green")
    }
    if(width >= 0 & energy > 25 & energy < 75){
        setColor("orange")
    }
    if(width >= 0 & energy <= 25 & energy >=1){
        setColor("red")
    }

    return (
        <div>
            {tooMuchCandyMessage===true ? <div className="no-candy">You have too much candy already, kiddo!</div> : null}
            {message ? <div onClick={backClick} className="no-candy">they didn't answer 💀<br></br>should we tp them?🧻</div> : null}
            <img src={background} style={{ width: '70%', height: '100%' }} />
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
            <Songbar
            playing={playing}
            handleSongClick={handleSongClick}
            />
        </div>
    )
}

export default HousePorch