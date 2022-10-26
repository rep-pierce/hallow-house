import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

function HousePorch({ currentPorch }) {

    const [porchBool, setPorchBool] = useState(1)

    const navigate = useNavigate()

    function goBackClick(){
        navigate('/spookystreet')
    }

    useEffect(() => {
        function handleKeyPress(e) {
            
             if (e.key==='ArrowDown'){
                navigate('/spookystreet')
            }
        }

        document.addEventListener('keydown', handleKeyPress)

        return function cleanup() {
            document.removeEventListener('keydown', handleKeyPress)
        }
    })

        let background = porchBool === 1 ? currentPorch.closed : currentPorch.open
    return(
        <div onClick={() => setPorchBool(porchBool - 1)} style={{backgroundImage: `url(${background})`, position: 'absolute', width: '2100px', height: '1050px'}}>
            <h1>now you're on the porch</h1>
            <button onClick={goBackClick}>get back to trick or treatin</button>
        </div>
    )
}

export default HousePorch