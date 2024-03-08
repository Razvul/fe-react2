import React from 'react'
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom'
import Main from './components/Main';
import TablaSah from './components/TablaSah';
import PokemonList from './components/PokemonList'
import Pokemon from './components/Pokemon'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <nav>
                    <Link to='/'>Main</Link>
                    <Link to='/tablasah' style={{ margin: '10px' }}>Tabla Sah</Link>
                    <Link to='/pokemon-list'>Pokemon</Link>
                </nav>

                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='tablasah' element={<TablaSah />} />
                    <Route path='pokemon-list' element={<PokemonList />}>
                        <Route path=':pokemon' element={<Pokemon />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
