import React, { useState } from 'react'
import './Button.css'

export default function Button2({ text }) {
    const [textButon, setTextButon] = useState('Nu atinge!')
    return (
        <button onClick={() => setTextButon(text)}>{textButon}</button>
    )
}
