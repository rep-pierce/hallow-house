import React, { useState } from "react";
import { useNavigate } from "react-router-dom"


function Homepage() {
    const navigate = useNavigate()

    function handleClick() {
        navigate('/spookystreet')
    }



    return (
        <div className="homePage">
            <h1 style={{textAlign: "center", color: "orange"}}>Welcome to Hallow House</h1><br></br>
            <button className="homeButton" onClick={handleClick} >Enter Username To Play</button>
            <img style={{padding: "20px"}} src="https://www.history.com/.image/ar_233:100%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:good%2Cw_1920/MTY3NDg4OTU3NjQxMTQwMDEz/halloween-gettyimages-172988453.webp"/>
        </div>
    )
}

export default Homepage