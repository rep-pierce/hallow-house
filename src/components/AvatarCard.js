import React from "react";
import { useNavigate } from "react-router-dom";


function AvatarCard({avatar, setSelectedAvatar}){
    const navigate=useNavigate()

    function handleClick(avatar){
        setSelectedAvatar(avatar.image)
        navigate("/spookystreet")
    }
    return(
        <div className="card">
            <h1 style={{fontSize: "50px"}}>{avatar.name}</h1>
            <img 
            onClick={() => handleClick(avatar)}
            style={{padding: "30px", height:"550px", width:"550px"}}
            src={avatar.image}
            />
        </div>
    )
}

export default AvatarCard;