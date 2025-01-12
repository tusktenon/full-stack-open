function Persons({ persons, search, onRemove }) {
  const personsToShow =
    search.length === 0
      ? persons
      : persons.filter(person =>
          person.name.toLowerCase().includes(search.toLowerCase()),
        )

  return (
    <ul>
      {personsToShow.map(person => (
        <Person key={person.id} person={person} onRemove={onRemove} />
      ))}
    </ul>
  )
}

function Person({ person, onRemove }) {
  return (
    <li>
      {person.name} {person.number}{' '}
      <button onClick={() => onRemove(person)}>delete</button>
    </li>
  )
}

export default Persons
