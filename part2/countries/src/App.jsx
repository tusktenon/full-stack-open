import axios from 'axios'
import { useEffect, useState } from 'react'

function Results({ countries, search }) {
  const results = countries
    .map((c, i) => ({ id: i, name: c.name.common }))
    .filter(country =>
      country.name.toLowerCase().includes(search.toLowerCase()),
    )

  if (results.length > 10) {
    return <p>Too many matches, specify another filter.</p>
  }

  if (results.length > 1) {
    return (
      <>
        {results.map(c => (
          <p key={c.id}>{c.name}</p>
        ))}
      </>
    )
  }

  if (results.length == 1) {
    return <Country country={countries[results[0].id]} />
  }

  return <p>No matches found.</p>
}

function Country({ country }) {
  console.log(country)
  return (
    <>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital[0]}</p>
      <p>Area: {country.area}</p>

      <h3>Languages:</h3>
      <ul>
        {Object.values(country.languages).map(lang => (
          <li>{lang}</li>
        ))}
      </ul>

      <img src={country.flags.png} alt={country.flags.alt} />
    </>
  )
}

function App() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  const baseURL = 'https://studies.cs.helsinki.fi/restcountries/api/'

  useEffect(() => {
    axios.get(`${baseURL}\all`).then(response => {
      const sorted = response.data.toSorted((a, b) =>
        a.name.common.localeCompare(b.name.common),
      )
      setCountries(sorted)
    })
  }, [])

  const handleSearchChange = event => setSearch(event.target.value)

  return (
    <>
      <div>
        find countries: <input value={search} onChange={handleSearchChange} />
      </div>
      <Results countries={countries} search={search} />
    </>
  )
}

export default App
