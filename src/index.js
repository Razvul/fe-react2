import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom'
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
      <nav>
        <Link to='/'>Main</Link>
        <Link to='/tablasah'>Tabla Sah</Link>
        <Link to='/pokemon'>Pokemon</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='tablasah' element={<TablaSah />} />
        <Route path='pokemon' element={<Pokemon />}>
          <Route path='bulbasaur' element={<Bulbasaur />} />
          <Route path='charmender' element={<Charmender />} />
          <Route path='squirtle' element={<Squirtle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)