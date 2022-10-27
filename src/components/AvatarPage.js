import React, {useState} from "react";
import AvatarCard from "./AvatarCard";
import UserForm from "./UserForm";

function AvatarPage({avatars, setSelectedAvatar, image, name, setImage, setName, setAvatar}){

    function handleSubmit(e){
        e.preventDefault()
        const newAvatar={
            name: name,
            image: image
        }
        fetch("http://localhost:3001/avatars", {
            method:"POST",
            headers:{
              "content-Type": "application/json",
            }, 
            body: JSON.stringify(newAvatar),
          })
          .then((r) => r.json())
          .then(setAvatar([...avatars, newAvatar]))
        }

    function handleName(e){
        setName(e.target.value)
    }

    function handleImage(e){
        setImage(e.target.value)
    }
    function renderAvatar() {
        return avatars.map(avatar => <AvatarCard key={avatar.id} avatar={avatar} setSelectedAvatar={setSelectedAvatar}/>
        )
    }
    return(
        <div>
            <div className="avatarDiv" style={{color: "white", fontSize:"70px"}}>Choose Your Avatar
            {renderAvatar()}
            </div>
            <UserForm handleSubmit={handleSubmit} handleName={handleName} image={image} name={name} handleImage={handleImage}/>
        </div>
    )
}

export default AvatarPage;