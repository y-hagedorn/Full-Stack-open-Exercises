import { useState } from 'react'

import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'
import SearchFilter from './components/SearchFilter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456'},
    { name: 'Ada Lovelace', number: '39-44-5323523'},
    { name: 'Dan Abramov', number: '12-43-234345'},
    { name: 'Mary Poppendieck', number: '39-23-6423122'}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')

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
      alert(`${personObject.name} is already added to the phonebook`)
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
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

      <SearchFilter searchName={searchName} handleSearchInput={handleSearchInput}/>

      <h2>Add a new Number</h2>

      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handlePersonInput={handlePersonInput} handleNumberInput={handleNumberInput} />

      <h2>Numbers</h2>

      <PersonList persons={persons} filterName={searchName} />
    </div>
  )
}

export default App