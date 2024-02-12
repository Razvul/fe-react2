import React, { useState } from 'react'
import './Button.css'

export default function Button2({ text, color }) {
    const [textButon, setTextButon] = useState('Apasa-l')
    return (
        <button onClick={() => setTextButon(text)}
            style={{ border: `1px solid ${color}`, color: `${color}` }}
        >{textButon}</button>
    )
}

// 