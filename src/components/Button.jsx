import React from 'react'
import './Button.css'

function apasaButon() {
  return alert('Ai apasat cumva pe buton?')
}

export default function Button() {
  return (
    <button onClick={apasaButon}>Apasa-l</button>
  )
}
