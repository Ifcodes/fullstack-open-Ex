import React, { useState } from 'react'
import AddContact from './components/addContactform'
import ContactList from './components/contactsDisplay'
import Filter from './components/searchComp'

function App() {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', id: Math.random().toString(36).substring(2, 10), phoneNumber: +23410100882},
    {name: 'William Bernard', id: Math.random().toString(36).substring(2, 10), phoneNumber: +2348104777564}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  
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
