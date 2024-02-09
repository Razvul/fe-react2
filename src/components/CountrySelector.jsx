import { useState } from "react"

// import { useNavigate } from "react-router-dom"
// const navigate = useNavigate()
// navigate('/card')

const COUNTRIES = {
    Romania: ['Iasi', 'Bucharest', 'Cluj-Napoca'],
    France: ['Paris', 'Nice'],
    Germany: ['Munich', 'Dortmund', 'Berlin', 'Frankfurt'],
    Italy: ['Rome'],
}

export default function CountrySelector() {
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')

    const handleCountryChange = (e) => {
        setCountry(e.target.value)
    }

    return (
        <div>
            <label >Country</label>
            <select name="country" onChange={handleCountryChange}>
                <option value="">Select country</option>
                {Object.keys(COUNTRIES).map((country) => (
                    <option key={country} value={country}>{country}</option>
                ))}
            </select>
            <label>City</label>
            <select name="city" disabled={country === ''}>
                {COUNTRIES[country]?.map((city) => (
                    <option key={city} value={city}>{city}</option>
                ))}
            </select>
        </div>
    )
}