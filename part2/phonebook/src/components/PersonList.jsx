const PersonList = ({ persons, filterName }) => {

    const personsToShow = persons.filter(person =>
        person.name.toLowerCase().includes(filterName.toLowerCase())
      )

    return (
        <div>
        {personsToShow.map(person =>
          <div key={person.name}>
            {person.name} {person.number}
          </div>
        )}
      </div>
    )
  }
  
  export default PersonList