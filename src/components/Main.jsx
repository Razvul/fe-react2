import React, { useState } from 'react'
import Button from './Button'
import Center from './Center'
import Tabla from './Tabla'

export default function Main({ mesaj, text, color }) {
  const [childrenButton, setChildrenButton] = useState('Apasa butonurile!!!')

  function handleButtonClick(textButon) {
    setChildrenButton(textButon)
  }

  function passChildren(){
    setChildrenButton(<Tabla/>)
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
      {/* <Tabla /> */}
      <Button handleClick={() => handleButtonClick(mesaj[2])}
        text={text[2]}
        color={color[2]}
      />
      <Center children={childrenButton} />
    </>
  )
}
