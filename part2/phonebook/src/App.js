import React, { useState } from 'react'

const ContactName = (props) => {
  return(
    <>
      <p>
        {props.person} <br />
        {props.phoneNumber}
      </p>
    </>
  )
}

function App() {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', id: Math.random().toString(36).substring(2, 10), phoneNumber: +23410100882},
    {name: 'William Bernard', id: Math.random().toString(36).substring(2, 10), phoneNumber: +2348104777564}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  const styles = {
    margin: "1rem 0"
  }

  const handleNameFilter = (event) => {
    setNameFilter(event.target.value)
    // console.log(event.target.value)
  }
  
  const filtered = () => {
    // event.preventDefault()
    // setNameFilter(event.target.value)
    const filteredPerson = persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))
    return filteredPerson
    // console.log(filteredPerson)
  }
  const personToDisplay = nameFilter.trim() ? 
                  filtered() : persons

  const handleNewNames = (event) =>{
    setNewName(event.target.value)
    // console.log(event.target.value)
  }
  const handleNumbers = (e) => {
    setNumber(e.target.value)
  }
  const addContact = () => {
    // event.preventDefault()
    const addName = {
      name: newName,
      id: Math.random().toString(36).substring(2, 10),
      phoneNumber: newNumber
    }
    setPersons(persons.concat(addName))
    setNewName('')
    setNumber('')
  }

  const checkAddContact = (event) => {
    event.preventDefault()
    const nameTest = newName.toLowerCase()
    const personExist = persons.find(person => {
      const personChanged = person.name.toLowerCase()
      return personChanged === nameTest
    })
    const numberExist = persons.find(person => person.phoneNumber === newNumber)      

    if(personExist)  {
      window.confirm(`${newName} or Number is already added to phonebook`)
      setNewName(' ')
    }else if(numberExist) {
      window.confirm(`PhoneNumber is already added to phonebook`)
      setNewName(' ')
      setNumber(' ')
    }
    else{
      addContact()
    }

  }
  return (
    <div>
      <div>
        <h2>Search</h2>
        <form>
          <input type="search" value={nameFilter} onChange={handleNameFilter}/>
        </form>
      </div>
      <h2>Phonebook</h2>
      <form onSubmit={checkAddContact}>
        <div style={styles}>
          name: <input value={newName} onChange={handleNewNames} required/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumbers} required/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <>
        {
          personToDisplay.map(person => 
          <ContactName key={person.id} person={person.name} phoneNumber={person.phoneNumber}/>)
        }

      </>
    </div>
  );
}

export default App;
