import React from 'react'
import { useNavigate } from 'react-router-dom'
const Bienvenue = () => {
    const navigate = useNavigate()
    const retourCo  = () =>{
        navigate("/")
    }
return (
    <div>
        <h1>Bienvenue</h1>
        <button onClick={()=>{retourCo()}}>Déconnexion</button>
    </div>
    )
}

export default Bienvenue