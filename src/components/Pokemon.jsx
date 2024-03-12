import './Pokemon.css'

export default function Pokemon({ nume, handleClick }) {
    

    return (
        <div className='pokemon' onClick={handleClick}>
            <h2>{nume}</h2>
        </div>
    )
}
