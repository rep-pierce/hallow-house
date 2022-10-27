import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import UserForm from "./UserForm";

function Homepage() {
    const {name, setName} = useState("spooky")
    const navigate = useNavigate()

    function handleClick() {
        navigate('/AvatarPage')
    }

    function handleSubmit(e){
        e.preventDefault()
    }

    function handleName(e){
        console.log("hello")
    }    

    return (
        <div className="homePage">
            <h1 style={{textAlign: "center",color: "orange"}}>Welcome to Hallow House</h1>
            <button className="homeButton" onClick={handleClick} >Click to Trick or Treat</button>
            <img style={{padding: "40px"}} src="https://www.history.com/.image/ar_233:100%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:good%2Cw_1920/MTY3NDg4OTU3NjQxMTQwMDEz/halloween-gettyimages-172988453.webp"/>
        </div>
    )
}

export default Homepage