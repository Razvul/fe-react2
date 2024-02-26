import React from 'react'
import { Link, Route, Router } from 'wouter'
import Bulbasaur from './Bulbasaur'
import Charmender from './Charmender'
import Squirtle from './Squirtle'

export default function Pokemon() {


    return (
        <section>
            <Link to='pokemon/bulbasaur'>Bulbasaur</Link>
            <Link to='pokemon/charmender'>Charmender</Link>
            <Link to='pokemon/squirtle'>Squirtle</Link>
            <Router>
                <Route path='pokemon/bulbasaur' component={Bulbasaur} />
                <Route path='charmender' component={Charmender} />
                <Route path='squirtle' component={Squirtle} />
            </Router>
        </section>
    )
}
