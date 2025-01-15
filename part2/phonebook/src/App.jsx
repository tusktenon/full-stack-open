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

  const handleNameChange = event => {
    setNewName(event.target.value)
  }

  const handleNumberChange = event => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = event => {
    setSearch(event.target.value)
  }

  const displayNotification = (message, type = 'info') => {
    setNotification({ message, type })
    setTimeout(() => setNotification(null), 3000)
  }

  const addPerson = () => {
    entryService.create({ name: newName, number: newNumber }).then(newEntry => {
      setPersons(persons.concat(newEntry))
      displayNotification(`Added ${newName}`)
    })
  }

  const updatePerson = person => {
    const message = `${newName} is already in the phonebook. Replace the old number with a new one?`
    if (confirm(message)) {
      entryService
        .update(person, newNumber)
        .then(updated => {
          setPersons(persons.map(p => (p.id === person.id ? updated : p)))
          displayNotification(`Updated number for ${newName}`)
        })
        .catch(() => {
          displayNotification(
            `Entry for ${newName} has already been removed from the server`,
            'error',
          )
          setPersons(persons.filter(p => p.id !== person.id))
        })
    }
  }

  const removePerson = person => {
    if (confirm(`Delete ${person.name} ?`)) {
      entryService.remove(person).then(() => {
        setPersons(persons.filter(p => p.id !== person.id))
        displayNotification(`Removed ${person.name}`)
      })
    }
  }

  const handleFormSubmission = event => {
    event.preventDefault()
    const existing = persons.find(person => person.name === newName)
    if (existing) {
      updatePerson(existing)
    } else {
      addPerson()
    }
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification
        message={notification?.message}
        type={notification?.type}
      />
      <Filter search={search} onChange={handleSearchChange} />

      <h3>Add new entry</h3>
      <PersonForm
        name={newName}
        onNameChange={handleNameChange}
        number={newNumber}
        onNumberChange={handleNumberChange}
        onSubmit={handleFormSubmission}
      />

      <h3>Numbers</h3>
      <Persons persons={persons} search={search} onRemove={removePerson} />
    </div>
  )
}

export default App
