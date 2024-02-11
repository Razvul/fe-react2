import React, { useState } from 'react'
import './Button.css'
import Button from './Button'

export default function Button2({ textButon2, mesaj2, color }) {
    const [textButon, setTextButon] = useState(textButon2)
    return (
        <Button text={textButon} mesaj={mesaj2} color={color}
            handleClick={()=>setTextButon(textButon2)}
        />
    )
}

// 