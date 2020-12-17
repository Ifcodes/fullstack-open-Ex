import React, { useState } from 'react'

const ContactName = (props) => {
  return(
    <>
      <p>
        {props.person}
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
    // console.log(event.target.value)
  }
  const addContact = () => {
    // event.preventDefault()
    const addName = {
      name: newName,
      id: Math.random().toString(36).substring(2, 10)
    }
    setPersons(persons.concat(addName))
    setNewName('')
  }

  const checkAddContact = (event) => {
    event.preventDefault()
    const nameTest = newName.toLowerCase()
    const personExist = persons.find(person => {
      const personChanged = person.name.toLowerCase()
      console.log({personChanged , nameTest});
      return personChanged === nameTest
    })
    console.log({personExist});
      

    if(personExist)  {
      window.confirm(`${newName} is already added to phonebook`)
      setNewName(' ')
    }
    else{
      addContact()
    }

  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={checkAddContact}>
        <div>
          name: <input value={newName} onChange={handleNewNames}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <>
        {persons.map(person => <ContactName key={person.id} person={person.name}/>)}
      </>
    </div>
  );
}

export default App;
