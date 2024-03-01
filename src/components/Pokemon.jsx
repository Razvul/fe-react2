import { Link, Outlet } from "react-router-dom"


export default function Pokemon() {


    return (
        <div>
            Aici avem un pokemon
            <nav>
                <Link to='bulbasaur'>Bulbasaur</Link>
                <Link to='charmender'>Charmender</Link>
                <Link to='squirtle'>Squirtle</Link>
                <Outlet />
            </nav>
        </div>
    )
}
