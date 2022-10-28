import React from "react";
import { useNavigate } from "react-router-dom"
import Songbar from "./Songbar";
// import Songbar from "./Songbar";

function Homepage({ handleSongClick, playing }) {
    const navigate = useNavigate()
    function handleClick() {
        navigate('/AvatarPage')

    }

    return (
        <div className="homePage">
            <h1 style={{margin: "0", textAlign: "center", color: "white", fontSize: "60px" }}>Welcome to Hallow House</h1>
            <button className="homeButton" onClick={handleClick} >Click To Choose Your Avatar</button>
            <div>
                <h1 className="playInstructions">How to Play:</h1>
                <ul>
                    <p className="instructions">Use your left and right arrow buttons to move</p>
                    <p className="instructions">Use your up arrow to enter a house, and your down arrow to exit</p>
                    <p className="instructions">When on a house porch, click your spacebar to knock on the door and hopefully get some candy!</p>
                    <p className="instructions">Move your character to the edge of the screen to see some more houses!</p>
                </ul>
            </div>
            <div >
                <h3 style={{ fontSize: "550px" }}></h3>
                <img style={{ height: "300px" }} />
                <Songbar
                    handleSongClick={handleSongClick}
                    playing={playing}
                />
            </div>
        </div>
    )
}

export default Homepage