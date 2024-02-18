import React, { useState } from 'react'
import Button from './Button'
import Center from './Center'

export default function Main({ mesaj, text, color }) {
  const [textButton, setTextButton] = useState('Apasa butonurile!!!')

  function handleButtonClick(textButon) {
    setTextButton(textButon)
  }

  return (
    <>
      <Button handleClick={() => handleButtonClick(mesaj[0])}
        text={text}
        color={color[0]}
      />
      <Button handleClick={() => handleButtonClick(mesaj[1])}
        text={text}
        color={color[1]}
      />
      <Button handleClick={() => handleButtonClick(mesaj[2])}
        text={text}
        color={color[2]}
      />
      <Center text={textButton} />
    </>
  )
}
