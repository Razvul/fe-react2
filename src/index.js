import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './components/Main';
import Button from './components/Button';
import Button2 from './components/Button2';
import CountrySelector from './components/CountrySelector';
import Register from './components/Register';

const mesaj1 = 'Ai apasat cumva pe buton?'
const textButon1 = 'Apasa-l'

const mesaj2 = 'Cum ai ajuns aici?'
const textButon2 = 'BOOM'

const mesaj3='Bine ai venit in alerta!'
const textButon3='Push'

function apasaButon(mesaj) {
  return alert(mesaj)
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
    <Button mesaj={mesaj1} text={textButon1} handleClick={apasaButon} color='green'/>
    <Button mesaj={mesaj2} text={textButon2} handleClick={apasaButon} color='red' />
    <Button mesaj={mesaj3} text={textButon3} handleClick={apasaButon} color='blue'/>
    {/* <Button2 text={textButon1} /> */}
    <CountrySelector />
    {/* <Register /> */}
  </React.StrictMode>
)