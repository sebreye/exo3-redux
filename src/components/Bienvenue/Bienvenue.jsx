import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Bienvenue = () => {
    const navigate = useNavigate()
    const retourCo  = () =>{
        navigate("/")
    }
return (
    <div>
        <h1>Bienvenue</h1>
        <p>vous êtes connecté</p>
        <button onClick={()=>{retourCo()}}>Déconnexion</button>
    </div>
    )
}

export default Bienvenue