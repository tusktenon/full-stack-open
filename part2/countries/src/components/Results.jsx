import Country from './Country'

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

export default Results
