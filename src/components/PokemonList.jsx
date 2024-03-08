import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Pokemon from "./Pokemon"
import './PokemonList.css'


const Pokedex = require("pokeapi-js-wrapper")
const P = new Pokedex.Pokedex()

export default function PokemonList() {


    const [listaPokemoni, setListaPokemoni] = useState('')

    const interval = {
        offset: 0,
        limit: 30,
    };

    const navigate = useNavigate()

    useEffect(() => {
        P.getPokemonsList(interval).then(async (response) => {

            setListaPokemoni(response)

            response.results.map((pokemon, i) => {
                P.getPokemonByName(pokemon.name).then(
                    async (raspuns) => {
                        response.results[i].details = raspuns
                        setListaPokemoni(response)
                    }
                )
            })
        })
    }, [])

    function navigatePokemon(pokemon) {
        navigate(`/:${pokemon.name}`, { state: pokemon })
    }

    return (
        <div>
            Aici avem mai multi pokemoni
            <div className="pokemon-list">
                {listaPokemoni && listaPokemoni.results.map(pokemon => (
                    <Pokemon
                        key={pokemon.name}
                        nume={pokemon.name}
                        handleClick={() => navigatePokemon(pokemon)}
                        // imagine={pokemon.details && pokemon.details.sprites['front_default']} alt={pokemon.nume}
                        tip={pokemon.types}
                    />
                ))}
            </div>
        </div>
    )
}