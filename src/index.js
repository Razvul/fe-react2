import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './components/Main';
import { Link, Route, Switch } from 'wouter'
import TablaSah from './components/TablaSah';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Link href='/main'>Main</Link>
    <Link href='/tablasah'>Tabla Sah</Link>
    <Switch>
      <Route path='/main' component={Main}/>
      <Route path='/tablasah' component={TablaSah}/>
      <Route>404: page not found</Route>
    </Switch>
    {/* <Main mesaj={mesaje} text={texte} color={culori} />
    <TablaSah /> */}
  </React.StrictMode>
)