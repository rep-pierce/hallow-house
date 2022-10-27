import React from "react";
import { useNavigate } from "react-router-dom"
// import Songbar from "./Songbar";

function Homepage({ direcs1, showDirecs1, showDirecs2, handleSongClick}) {
    const navigate = useNavigate()
    function handleClick() {
        navigate('/AvatarPage')

        // setTimeout(() => showDirecs1(true), 5000)
        // setTimeout(() => showDirecs1(false), 11000)
        // setTimeout(() => showDirecs2(true), 11000)
        // setTimeout(() => showDirecs2(false), 20000)
    }

    return (
        <div className="homePage">
            <h1 style={{textAlign: "center",color: "white", fontSize:"60px"}}>Welcome to Hallow House</h1>
            <button className="homeButton" onClick={handleClick} >Click To Choose Your Avatar</button>
            <div >
                <h3 style={{fontSize: "550px"}}></h3>
                <img style={{height: "300px"}}/>
            </div>
        </div>
    )
}

export default Homepage