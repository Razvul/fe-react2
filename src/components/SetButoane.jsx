import React from 'react'
import Button from './Button'

function apasaButon(mesaj) {
    return alert(mesaj)
}

export default function SetButoane({ mesaj, text, color }) {
    return (
        <div>
            <Button mesaj={mesaj[0]} text={text[0]} handleClick={() => apasaButon(mesaj[0])} color={color[0]} />
            <Button mesaj={mesaj[1]} text={text[1]} handleClick={() => apasaButon(mesaj[1])} color={color[1]} />
            <Button mesaj={mesaj[2]} text={text[2]} handleClick={() => apasaButon(mesaj[2])} color={color[2]} />
        </div>
    )
}
