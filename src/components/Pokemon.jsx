import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"

const Pokedex = require("pokeapi-js-wrapper")
const P = new Pokedex.Pokedex()

export default function Pokemon() {


    const [listaPokemoni, setListaPokemoni] = useState('')
    const [listaImagini, setListaImagini] = useState('')

    const interval = {
        offset: 0,
        limit: 12,
    };

    useEffect(() => {
        P.getPokemonsList(interval).then(async (response) => {

            setListaPokemoni(response)
            console.log(response)

            response.results.map((pokemon, i) => {
                P.getPokemonByName(pokemon.name).then(
                    async (raspuns) => {
                        response.results[i].details = raspuns
                        setListaPokemoni(response)
                        console.log(response)
                    }
                )
            })
        })
    }, [])
    console.log(listaPokemoni)

    return (
        <div>
            Aici avem un pokemon
            <div style={{ display: "flex", justifyContent: 'space-around' }}>
                {listaPokemoni && listaPokemoni.results.map(pokemon => (
                    <div key={pokemon.name}>
                        <p>{pokemon.name}</p>
                        <img src={pokemon.details && pokemon.details.sprites['front_default']} alt={pokemon.nume} />
                    </div>
                ))}
            </div>
        </div>
    )
}