import React, { useState } from 'react'

const ContactName = (props) => {
  return(
    <>
      <p>
        {props.persons}
      </p>
    </>
  )
}

function App() {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', id: Math.random().toString(36).substring(2, 10)},
    {name: 'William Bernard', id: Math.random().toString(36).substring(2, 10)}
  ])
  const [newName, setNewName] = useState('')

  const handleNewNames = (event) =>{
    setNewName(event.target.value)
  }
  const addContact = (event) => {
    event.preventDefault()
    // console.log('button clicked', event.target)
    const addName = {
      name: newName,
      id: Math.random().toString(36).substring(2, 10)
    }
    setPersons(persons.concat(addName))
    setNewName('')
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleNewNames}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <>
        {persons.map(person => <ContactName key={person.id} persons={person.name}/>)}
      </>
    </div>
  );
}

export default App;
