import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './components/Main';
import Button from './components/Button';

const mesaj1 = 'Ai apasat cumva pe buton?'
const textButon1 = 'Apasa-l'

const mesaj2 = 'Cum ai ajuns aici?'
const textButon2 = 'Text'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
    <Button mesaj={mesaj1} text={textButon1} />
    <Button mesaj={mesaj2} text={textButon2} />
  </React.StrictMode>
)