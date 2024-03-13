import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './PokemonDetails.css'

export default function PokemonDetails() {
    const params = useParams()
    // intoarce un obiect care are toti parametrii customi pe care i-am definit in Route
    // avem un obiect cu cheia pokemondetails si valoarea este ceea ce am introdus in url
    // console.log(params)

    const Pokedex = require("pokeapi-js-wrapper")
    const P = new Pokedex.Pokedex()

    const [details, setDetails] = useState('')

    useEffect(() => {
        P.getPokemonByName(params.pokemondetails).then(
            async (raspuns) => {
                console.log(raspuns)
                setDetails(raspuns)
            }
        )
    }, [params.pokemondetails])

    // de facut search si paginare

    
    return (
        <div>
            <img src={details && details.sprites.front_default} alt={details.name} />
            <h3 className='nume-pokemon'>{details.name}</h3>
            <div className='details'>
                <ol>
                    Abilities:
                    {details && details.abilities.map((ability) => {
                        return <li key={ability.ability.name}>{ability.ability.name}</li>
                    })}
                </ol>
                <ul>
                    Type
                    {details && details.types.map(tip =>
                        <li key={tip.type.name}> {tip.type.name}</li>)}
                </ul>
                <ol className='stats'>
                    Stats:
                    {details && details.stats.map(stat => <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>)}
                </ol>
                <ul>
                    Moves:
                    {details && details.moves.slice(0, 15).map(miscare => <li key={miscare.move.name}>{miscare.move.name}</li>)}
                </ul>
            </div>
        </div>
    )
}
