import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Notification from './components/Notification'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import entryService from './services/entries'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    entryService.getAll().then(initialEntries => setPersons(initialEntries))
  }, [])

  const addPerson = event => {
    event.preventDefault()
    const existing = persons.find(person => person.name === newName)
    if (existing) {
      const message = `${newName} is already in the phonebook. Replace the old number with a new one?`
      if (confirm(message)) {
        entryService
          .update(existing, newNumber)
          .then(updated => {
            setPersons(persons.map(p => (p.id === existing.id ? updated : p)))
            setNotification({
              message: `Updated number for ${newName}`,
              style: 'info',
            })
            setTimeout(() => setNotification(null), 3000)
          })
          .catch(_ => {
            setNotification({
              message: `Entry for ${newName} has already been removed from the server`,
              style: 'error',
            })
            setPersons(persons.filter(p => p.id !== existing.id))
            setTimeout(() => setNotification(null), 3000)
          })
      }
    } else {
      entryService
        .create({ name: newName, number: newNumber })
        .then(newEntry => {
          setPersons(persons.concat(newEntry))
          setNotification({ message: `Added ${newName}`, style: 'info' })
          setTimeout(() => setNotification(null), 3000)
        })
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
      entryService.remove(person).then(() => {
        setPersons(persons.filter(p => p.id !== person.id))
        setNotification({ message: `Removed ${person.name}`, style: 'info' })
        setTimeout(() => setNotification(null), 3000)
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification
        message={notification?.message}
        style={notification?.style}
      />
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
