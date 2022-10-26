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
        <img onClick={() => setPorchBool(porchBool - 1)} src={background} style={{width: '70%', height: '100%'}} />
    )
}

export default HousePorch