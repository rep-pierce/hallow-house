import React from "react";
import { useNavigate } from "react-router-dom"

function Homepage() {
    const navigate = useNavigate()

    function handleClick() {
        navigate('/spookystreet')
    }

    return (
        <>
            <h1>HELLO</h1>
            <button onClick={handleClick}>go trick or treating</button>
        </>
    )
}

export default Homepage