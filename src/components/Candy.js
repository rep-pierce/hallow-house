import React from "react"
import handleRandomCandy from "./handleRandomCandy"

function Candy({ image, name }){
    return(
    <img src={image.image} name={name.name}/>
)
}


export default Candy