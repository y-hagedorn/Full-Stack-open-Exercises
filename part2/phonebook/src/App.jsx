import { useState, useEffect } from 'react'
import axios from 'axios'

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
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
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
      alert(`${personObject.name} is already added to the phonebook`)
    } else {

      axios
        .post('http://localhost:3001/persons', personObject)
        .then(response => {
          console.log(response)
          setPersons(persons.concat(personObject))
          setNewName('')
          setNewNumber('')
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

      <SearchFilter searchName={searchName} handleSearchInput={handleSearchInput}/>

      <h2>Add a new Number</h2>

      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handlePersonInput={handlePersonInput} handleNumberInput={handleNumberInput} />

      <h2>Numbers</h2>

      <PersonList persons={persons} filterName={searchName} />
    </div>
  )
}

export default App