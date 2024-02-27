import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Link, Route, Switch } from 'wouter'
import Main from './components/Main';
import TablaSah from './components/TablaSah';
import Pokemon from './components/Pokemon';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Link href='/'>Main</Link>
    <Link href='/tablasah'>Tabla Sah</Link>
    <Link href='/pokemon'>Pokemon</Link>

    <Switch>
      <Route path='/' component={Main}></Route>
      <Route path='/tablasah' component={TablaSah} > </Route>
      <Route path='/pokemon/:'  component={Pokemon}> </Route>
    </Switch>
  </React.StrictMode>
)