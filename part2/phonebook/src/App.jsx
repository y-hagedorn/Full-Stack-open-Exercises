import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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

  return (
    <div>
      <h1>Phonebook</h1>

      <h2>Add a new Number</h2>
      <form onSubmit={addPerson}>
        <div>name: <input name="nameEntry" value={newName} onChange={handlePersonInput} /></div>
        <div>number: <input name="numberEntry" value={newNumber} onChange={handleNumberInput} /></div>
        <div>debug: {newName}, {newNumber}</div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person =>
          <div key={person.name}>
            {person.name} {person.number}
          </div>
        )}
      </div>
    </div>
  )
}

export default App