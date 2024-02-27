import { Link, Route, Switch } from 'wouter'
import Bulbasaur from './Bulbasaur'
import Charmender from './Charmender'
import Squirtle from './Squirtle'

export default function Pokemon() {


    return (
        <div>
            <br /> Aici avem un pokemon <br />
            <Link href='/pokemon/bulbasaur'>Bulbasaur</Link>
            <Link href='/pokemon/charmender'>Charmender</Link>
            <Link href='/pokemon/squirtle'>Squirtle</Link>

            <Switch>
                <Route path='/pokemon/bulbasaur' component={Bulbasaur} > <Bulbasaur/> </Route>
                <Route path='/pokemon/charmender' component={Charmender} > <Charmender/> </Route>
                <Route path='/pokemon/squirtle' component={Squirtle} >  </Route>
            </Switch>
        </div>
    )
}
