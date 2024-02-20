import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './components/Main';
import Button from './components/Button';

const mesaj1 = 'Ai apasat cumva pe buton?'
const textButon1 = 'Apasa-l'

const mesaj2 = 'Cum ai ajuns aici?'
const textButon2 = 'BOOM'

const mesaj3 = 'Bine ai venit in alerta!'
const textButon3 = 'Push'

const mesaje = [mesaj1, mesaj2, mesaj3,]
const culori = ['green', 'red', 'blue',]
const texte = [textButon1, textButon2, textButon3]

function apasaButon(mesaj) {
  return alert(mesaj)
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Welcome to Boom Town!</h1>
    <Main mesaj={mesaje} text={texte} color={culori} />
    <Button mesaj={mesaj1} text={textButon1} handleClick={() => apasaButon(mesaj1)} color='green' />
    <Button mesaj={mesaj2} text={textButon2} handleClick={() => apasaButon(mesaj2)} color='red' />
    <Button mesaj={mesaj3} text={textButon3} handleClick={() => apasaButon(mesaj3)} color='blue' />
  </React.StrictMode>
)