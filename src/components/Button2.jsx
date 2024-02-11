import React, { useState } from 'react'
import './Button.css'
import Button from './Button'

export default function Button2({ textButon2, mesaj2, apasaButon, color }) {
    const [textButon, setTextButon] = useState('Nu atinge!')
    return (
        <Button onClick={() => setTextButon(textButon2)}
            // text={textButon2} mesaj={mesaj2}  color={color}
        >{textButon}
        </Button>
    )
}
