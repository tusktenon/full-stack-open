import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import entryService from './services/entries'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    entryService.getAll().then(initialEntries => setPersons(initialEntries))
  }, [])

  const addPerson = event => {
    event.preventDefault()
    const existing = persons.find(person => person.name === newName)
    if (existing) {
      const message = `${existing.name} is already in the phonebook. Replace the old number with a new one?`
      if (confirm(message)) {
        entryService.update(existing, newNumber).then(updated => {
          setPersons(persons.map(p => (p.id === existing.id ? updated : p)))
        })
      }
    } else {
      entryService
        .create({ name: newName, number: newNumber })
        .then(newEntry => setPersons(persons.concat(newEntry)))
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

  const handleRemovalOf = person => {
    if (confirm(`Delete ${person.name} ?`)) {
      entryService
        .remove(person)
        .then(() => setPersons(persons.filter(p => p.id !== person.id)))
    }
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
      <Persons persons={persons} search={search} onRemove={handleRemovalOf} />
    </div>
  )
}

export default App
