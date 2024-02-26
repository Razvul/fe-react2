import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './components/Main';
import { Link, Route, Router, Switch } from 'wouter'
import TablaSah from './components/TablaSah';
import Pokemon from './components/Pokemon';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Link href='/main'>Main</Link>
    <Link href='/tablasah'>Tabla Sah</Link>
    <Link href='/pokemon'>Pokemon</Link>
    <Router>
      <Route path='/main' component={Main} />
      <Route path='/tablasah' component={TablaSah} />
      <Route path='/pokemon' component={Pokemon} />
    </Router>
  </React.StrictMode>
)