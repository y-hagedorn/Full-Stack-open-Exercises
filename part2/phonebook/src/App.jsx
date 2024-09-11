import { useState, useEffect } from 'react'

import personService from './services/persons'

import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'
import SearchFilter from './components/SearchFilter'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')

  useEffect(() => {

    console.log('effect')
    personService
      .getAll()
      .then(savedPersons => {
        console.log('promise fulfilled')
        setPersons(savedPersons)
      })
      .catch(error => {
        console.log('get request failed')
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const addPerson = (event) => {

    event.preventDefault()
    console.log('button clicked', event.target)

    const personObject = {
      name: newName,
      number: newNumber
    }

    // Check if the name input is empty
    if (newName.trim().length === 0) {

      alert("Add a name to the number")
      return
    }

    // Check if the number input is empty
    if (newNumber.trim().length === 0) {

      alert("Add a number to the name")
      return
    }

    // Check if the name already exists in the persons array
    if (persons.some(person => person.name === personObject.name)) {

      if (window.confirm(`${personObject.name} is already added to the phonebook. 
        Do you want to replace the old number with a new one?`)) {

        const id = persons.find(person => person.name === personObject.name)?.id
        const entry = persons.find(p => p.id === id)
        const changedEntry = { ...entry, number: personObject.number }

        personService
          .update(id, changedEntry)
          .then(returnedPerson => {
            console.log(returnedPerson)
            setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
          })
          .catch(error => {
            console.log('put request failed')
          })
      }
    } else {

      personService
        .create(personObject)
        .then(returnedPerson => {
          console.log(returnedPerson)
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          console.log('post request failed')
        })
    }
  }

  const handlePersonInput = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberInput = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchInput = (event) => {
    console.log(event.target.value)
    setSearchName(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>

      <SearchFilter
        searchName={searchName}
        handleSearchInput={handleSearchInput}
      />

      <h2>Add a new Number</h2>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handlePersonInput={handlePersonInput}
        handleNumberInput={handleNumberInput}
      />

      <h2>Numbers</h2>

      <PersonList
        persons={persons}
        filterName={searchName}
      />
    </div>
  )
}

export default App