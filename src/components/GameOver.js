import React from "react";
import { useNavigate } from "react-router-dom";

function GameOver(){
    const navigate = useNavigate()

    function handleClick(){
        navigate('/')
        window.location.href=window.location.href
    }


    return(
    <div>
        <div>
            <img className="sewerClown" src="https://i.pinimg.com/originals/bb/2b/f0/bb2bf0a0bc00292a0ebec3cefc495b05.jpg"
            style={{padding: "90px", height: "900px"}}
            />
        </div>
        <button className="gameoverBtn" onClick={handleClick} >DARE TO START OVER</button>
    </div>
    )
}


export default GameOver;