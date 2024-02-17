import React, { useState } from 'react'
import Button from './Button'

export default function Main({ text, color }) {
  const [textButton, setTextButton] = useState('Apasa-l')

  function handleButtonClick(textButon) {
    setTextButton(textButon)
  }

  return (
    <>
      <h1>Welcome to Boom Town!</h1>
      <Button handleClick={() => handleButtonClick(text)} text={textButton}
        color={color}
      />
    </>
  )
}
