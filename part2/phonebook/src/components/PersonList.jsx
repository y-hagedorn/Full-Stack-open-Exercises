import personService from '../services/persons'

const PersonList = ({ persons, filterName }) => {

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(filterName.toLowerCase())
  )

  const deletePersonOf = (id) => {
    console.log(`delete person with ${id}`)

    if (window.confirm(`Do you really want to delete '${persons.find(person => person.id === id)?.name}'?`)) {
      personService
        .deletePerson(id)
        .then(
          deletedPerson => {
            console.log(deletedPerson)
            console.log(`deleted person with id: ${id}`)
          })
        .catch(error => {
          console.log('delete request failed')
          alert(
            `'${persons.find(person => person.id === id)?.name}' was already deleted from server`      )
        })
    }
  }

  return (
    <div>
      {personsToShow.map(person =>
        <div key={person.id}>
          {person.name} {person.number} <button onClick={() => deletePersonOf(person.id)}>Delete</button>
        </div>
      )}
    </div>
  )
}

export default PersonList