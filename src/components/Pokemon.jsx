import { Link, Route, Switch } from 'wouter'
import Bulbasaur from './Bulbasaur'
import Charmender from './Charmender'
import Squirtle from './Squirtle'

export default function Pokemon() {


    return (
        <>
            <br /> Aici avem un pokemon <br />
            <Link href='/bulbasaur'>Bulbasaur</Link>
            <Link href='/charmender'>Charmender</Link>
            <Link href='/squirtle'>Squirtle</Link>

            <Switch>
                <Route path='/pokemon/bulbasaur' component={Bulbasaur} > </Route>
                <Route path='/pokemon/charmender' component={Charmender} > </Route>
                <Route path='/pokemon/squirtle' component={Squirtle} > </Route>
            </Switch>
        </>
    )
}
