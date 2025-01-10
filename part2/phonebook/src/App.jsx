import { useState } from 'react'

function Filter({ search, onChange }) {
  return (
    <div>
      filter shown with <input value={search} onChange={onChange} />
    </div>
  )
}

function PersonForm({ name, onNameChange, number, onNumberChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input value={name} onChange={onNameChange} />
      </div>
      <div>
        number: <input value={number} onChange={onNumberChange} />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  )
}

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

function App(props) {
  const [persons, setPersons] = useState(props.persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const addPerson = event => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already in the phonebook`)
    } else {
      setPersons(
        persons.concat({
          name: newName,
          number: newNumber,
          id: persons.length + 1,
        }),
      )
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = event => {
    setNewName(event.target.value)
  }

  const handleNumberChange = event => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = event => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} onChange={handleSearchChange} />

      <h3>Add new entry</h3>
      <PersonForm
        name={newName}
        onNameChange={handleNameChange}
        number={newNumber}
        onNumberChange={handleNumberChange}
        onSubmit={addPerson}
      />

      <h3>Numbers</h3>
      <Persons persons={persons} search={search} />
    </div>
  )
}

export default App
