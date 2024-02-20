import React, { useState } from 'react'
import Button from './Button'
import Center from './Center'
import Tabla from './Tabla'
import SetButoane from './SetButoane'

export default function Main({ mesaj, text, color }) {
  const [childrenButton, setChildrenButton] = useState('Apasa butonurile!!!')

  function handleButtonClick(textButon) {
    setChildrenButton(textButon)
  }

  function passChildren(){
    setChildrenButton(<Tabla/>)
  }

  function passButtons(){
    setChildrenButton(<SetButoane mesaj={mesaj} text={text} color={color}/>)
  }

  return (
    <>
      <Button handleClick={() => handleButtonClick(mesaj[0])}
        text={text[0]}
        color={color[0]}
      />
      <Button handleClick={passChildren}
        text={text[1]}
        color={color[1]}
      />
      <Button handleClick={passButtons}
        text={text[2]}
        color={color[2]}
      />
      <Center children={childrenButton} />
    </>
  )
}
