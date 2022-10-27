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