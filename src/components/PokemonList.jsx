import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import Pokemon from "./Pokemon"
import './PokemonList.css'


const Pokedex = require("pokeapi-js-wrapper")
const P = new Pokedex.Pokedex()
// o librarie care-mi ofera mai multe functii pe care le pot folosi

export default function PokemonList() {


    const [listaPokemoni, setListaPokemoni] = useState('')

    const interval = {
        offset: 10,
        limit: 19,
    };

    const navigate = useNavigate()

    useEffect(() => {
        P.getPokemonsList(interval).then(async (response) => {
            // console.log(response)
            setListaPokemoni(response)

            response.results.map((pokemon, i) => {
                P.getPokemonByName(pokemon.name).then(
                    // console.log(pokemon),
                    async (raspuns) => {
                        // console.log(raspuns)
                        response.results[i].details = raspuns
                        setListaPokemoni(response)
                    }
                )
            })
        })
    }, [])

    function navigatePokemon(pokemon) {
        navigate(`/pokemon-list/${pokemon.name}`)
    }

    return (
        <>
            Aici avem mai multi pokemoni
            <div className="pokemon-list" >
                {listaPokemoni && listaPokemoni.results.map(pokemon => (
                    <Pokemon
                        key={pokemon.name}
                        nume={pokemon.name}
                        handleClick={() => navigatePokemon(pokemon)}
                    />
                ))}
            </div>
            <Outlet />
        </>
    )
}