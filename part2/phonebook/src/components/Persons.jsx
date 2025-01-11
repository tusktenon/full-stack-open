function Persons({ persons, search }) {
  const personsToShow =
    search.length === 0
      ? persons
      : persons.filter(person =>
          person.name.toLowerCase().includes(search.toLowerCase()),
        )

  return (
    <ul>
      {personsToShow.map(person => (
        <Person key={person.id} {...person} />
      ))}
    </ul>
  )
}

function Person({ name, number }) {
  return (
    <li>
      {name} {number}
    </li>
  )
}

export default Persons
