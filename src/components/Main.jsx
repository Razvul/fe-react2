import React, { useEffect, useState } from 'react'
import Button from './Button'
import Center from './Center'
import Tabla from './Tabla'
import SetButoane from './SetButoane'

const mesaj1 = 'Ai apasat cumva pe buton?'
const textButon1 = 'Apasa-l'

const mesaj2 = 'Cum ai ajuns aici?'
const textButon2 = 'BOOM'

const mesaj3 = 'Bine ai venit in alerta!'
const textButon3 = 'Push'

const mesaje = [mesaj1, mesaj2, mesaj3,]
const culori = ['green', 'red', 'blue',]
const texte = [textButon1, textButon2, textButon3]

export default function Main() {
  const [childrenButton, setChildrenButton] = useState('Apasa butonurile!!!')
  const [counter, setCounter] = useState(0)

  function handleButtonClick(textButon) {
    setChildrenButton(textButon)
    setCounter(counter + 1)
  }

  function passChildren() {
    setChildrenButton(<Tabla />)
    setCounter(counter + 1)
  }

  function passButtons() {
    setChildrenButton(<SetButoane mesaj={mesaje} text={texte} color={culori} />)
    setCounter(counter + 1)
  }

  useEffect(() => {
  }, [])

  return (
    <>
      <h1>Welcome to Boom Town!</h1>
      <h1>{counter}</h1>
      <Button handleClick={() => handleButtonClick(mesaje[0])}
        text={texte[0]}
        color={culori[0]}
      />
      <Button handleClick={passChildren}
        text={texte[1]}
        color={culori[1]}
      />
      <Button handleClick={passButtons}
        text={texte[2]}
        color={culori[2]}
      />
      <Center children={childrenButton} />
    </>
  )
}
