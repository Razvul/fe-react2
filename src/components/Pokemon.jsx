import { useEffect, useRef } from "react"
import { Link, Outlet } from "react-router-dom"

const url = 'https://unpkg.com/pokeapi-js-wrapper/dist/index.js'

export default function Pokemon() {

    const Pokedex = require("pokeapi-js-wrapper")
    const P = new Pokedex.Pokedex()

    useEffect(() => {
        const script = document.createElement("script")
        script.src = url
        script.async = true
        document.body.appendChild(script)
        // console.log(script)

        // (async () => {
        //     const golduck = await P.getPokemonByName('golduck')
        //     console.log(golduck)
        // })();
        return () => {
            document.body.removeChild(script)
        }
    }, [])


    P.getPokemonByName('charizard').then(function (response) {
        // response.JSON()
        pokemonNume = response.name
        console.log(response)
    })

    const interval = {
        offset: 0,
        limit: 9,
    }

    P.getPokemonsList(interval).then(function (response) {
        console.log(response)
    })


    let pokemonNume = ''

    console.log(pokemonNume)
    return (
        <div>
            Aici avem un pokemon
            <nav>
                <Link to='bulbasaur'>Bulbasaur</Link>
                <Link to='charmender'>Charmender</Link>
                <Link to='squirtle'>Squirtle</Link>
                <Outlet />
                <h1>{pokemonNume}</h1>
            </nav>
        </div>
    )
}
