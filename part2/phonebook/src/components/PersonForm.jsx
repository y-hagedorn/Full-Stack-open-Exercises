const PersonForm = ({addPerson, newName, newNumber, handlePersonInput, handleNumberInput}) => {

    return (
        <form onSubmit={addPerson}>
        <div>Name: <input name="nameInput" value={newName} onChange={handlePersonInput} /></div>
        <div>Number: <input name="numberInput" value={newNumber} onChange={handleNumberInput} /></div>
        <div><button type="submit">Add</button></div>
      </form>
    )

}

export default PersonForm