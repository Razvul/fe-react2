import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"


const Pokedex = require("pokeapi-js-wrapper")
const P = new Pokedex.Pokedex()

export default function Pokemon() {


    const [listaPokemoni, setListaPokemoni] = useState('')
    // const [listaPokemoniImagine, setListaPokemoniImagine] = useState('')

    const interval = {
        offset: 0,
        limit: 12,
    }

    useEffect(() => {
        P.getPokemonsList(interval).then(function (response) {
            console.log(response)
            setListaPokemoni(response)
            console.log(listaPokemoni)
        })

        // P.getPokemonFormByName(interval).then(function (response){
        //     console.log(response)
        //     setListaPokemoni(response)
        //     console.log(listaPokemoni)
        // })
    }, [])

    return (
        <div>
            Aici avem un pokemon
            {/* <nav>
                <Link to='bulbasaur'>Bulbasaur</Link>
                <Link to='charmender'>Charmender</Link>
                <Link to='squirtle'>Squirtle</Link>
                <Outlet />
            </nav> */}
            <div style={{ display: "flex", justifyContent: 'space-around' }}>
                {listaPokemoni && listaPokemoni.results.map(pokemon => (
                    <div key={pokemon.id}>
                        <p>{pokemon.name}</p>
                        <img src={pokemon.url} alt={pokemon.nume} />
                    </div>
                ))}
            </div>
        </div>
    )
}
