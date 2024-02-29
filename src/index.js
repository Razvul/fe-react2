import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Link, Route, Routes, Outlet, BrowserRouter } from 'react-router-dom'
import Main from './components/Main';
import TablaSah from './components/TablaSah';
import Pokemon from './components/Pokemon';
import Bulbasaur from './components/Bulbasaur'
import Charmender from './components/Charmender'
import Squirtle from './components/Squirtle'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Outlet />
      <nav>
        <Link href='/'>Main</Link>
        <Link href='/tablasah'>Tabla Sah</Link>
        <Link href='/pokemon'>Pokemon</Link>
      </nav>

      <Routes>
        <Route path='/' element={Main} />
        <Route path='/tablasah' element={TablaSah} />
        <Route path='/pokemon' element={Pokemon}>
          {/* <Outlet />
        <Link href='/pokemon/bulbasaur'>Bulbasaur</Link>
        <Link href='/pokemon/charmender'>Charmender</Link>
        <Link href='/pokemon/squirtle'>Squirtle</Link> */}
          <Route path='/pokemon/bulbasaur' element={Bulbasaur} >  </Route>
          <Route path='/pokemon/charmender' element={Charmender} > </Route>
          <Route path='/pokemon/squirtle' element={Squirtle} >  </Route>
        </Route>
      </Routes></BrowserRouter>
  </React.StrictMode>
)