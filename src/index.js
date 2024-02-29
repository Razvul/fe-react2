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
        <Link to='/'>Main</Link>
        <Link to='/tablasah'>Tabla Sah</Link>
        <Link to='/pokemon'>Pokemon</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='tablasah' element={<TablaSah />} />
        <Route path='pokemon' element={<Pokemon />}>
          <Route path=':pokemon/:bulbasaur' element={<Bulbasaur />} />
          <Route path=':pokemon/:charmender' element={<Charmender />} />
          <Route path=':pokemon/:squirtle' element={<Squirtle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)