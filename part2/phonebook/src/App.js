import React, { useState, useEffect } from 'react'
import AddContact from './components/addContactform'
import ContactList from './components/contactsDisplay'
import Filter from './components/searchComp'
import axios from 'axios'


function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  },[])
  
  return (
    <div>
      <h1>Phonebook</h1>

      <Filter nameFilter={nameFilter} setNameFilter={setNameFilter} persons={persons}/>

      <h2>Add New Contact</h2>

      <AddContact setNewName={setNewName} newName={newName} setPersons={setPersons} setNumber={setNumber} newNumber={newNumber} persons={persons}/>

      <h2>Contact List</h2>

      <ContactList nameFilter={nameFilter} persons={persons}/>
     
    </div>
  );
}

export default App;
