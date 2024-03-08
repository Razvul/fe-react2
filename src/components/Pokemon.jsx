import React from 'react'
import { useLocation } from "react-router-dom"
import './Pokemon.css'

export default function Pokemon({ nume, imagine, tip, handleClick }) {
    const location = useLocation()
    
    return (
        <div className='pokemon' onClick={handleClick}>
            <h2>{nume}</h2>
            {/* <h2>{location}</h2> */}
            <img src={imagine} alt={imagine} />
            <p>{tip}</p>
        </div>
    )
}
