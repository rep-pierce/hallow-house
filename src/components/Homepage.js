import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import Songbar from "./Songbar";


function Homepage({ direcs1, showDirecs1, showDirecs2, handleSongClick}) {
    const navigate = useNavigate()

    function handleClick() {
        navigate('/spookystreet')

        setTimeout(() => showDirecs1(true), 5000)
        setTimeout(() => showDirecs1(false), 11000)
        setTimeout(() => showDirecs2(true), 11000)
        setTimeout(() => showDirecs2(false), 20000)
    }



    return (
        <div className="homePage">

            <h1 style={{ textAlign: "center", color: "orange" }}>Welcome to Hallow House</h1><br></br>
            <button className="homeButton" onClick={handleClick} >Enter Username To Play</button>
            <img style={{ padding: "20px" }} src="https://www.history.com/.image/ar_233:100%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:good%2Cw_1920/MTY3NDg4OTU3NjQxMTQwMDEz/halloween-gettyimages-172988453.webp" />
            <Songbar
            handleSongClick={handleSongClick}
            />
        </div>
    )
}

export default Homepage