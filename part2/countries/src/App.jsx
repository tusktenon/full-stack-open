import axios from 'axios'
import { useEffect, useState } from 'react'
import Results from './components/Results'

function App() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [show, setShow] = useState(-1)

  const baseURL = 'https://studies.cs.helsinki.fi/restcountries/api/'

  useEffect(() => {
    axios.get(`${baseURL}\all`).then(response => {
      const sorted = response.data.toSorted((a, b) =>
        a.name.common.localeCompare(b.name.common),
      )
      setCountries(sorted)
    })
  }, [])

  const handleSearchChange = event => {
    setSearch(event.target.value)
    setShow(-1)
  }

  const handleShow = index => setShow(index)

  return (
    <>
      <div>
        find countries: <input value={search} onChange={handleSearchChange} />
      </div>
      <Results countries={countries} search={search} show={show} onShow={handleShow} />
    </>
  )
}

export default App
