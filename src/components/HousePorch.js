import React from "react";
import { useNavigate } from "react-router-dom"

function HousePorch() {

    const navigate = useNavigate()

    function goBackClick(){
        navigate('/spookystreet')
    }

    return(
        <div>
            <h1>now you're on the porch</h1>
            <button onClick={goBackClick}>get back to trick or treatin</button>
        </div>
    )
}

export default HousePorch