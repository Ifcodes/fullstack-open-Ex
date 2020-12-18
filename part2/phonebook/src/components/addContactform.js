import React from 'react'

const AddContact = ({setNewName, newName, setPersons, setNumber, newNumber, persons}) => {

  const handleNewNames = (event) =>{
      setNewName(event.target.value)
  }

  const handleNumbers = (e) => {
    setNumber(e.target.value)
  }

  const addContact = () => {
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

  const styles = {
    margin: "1rem 0"
  }
  return (
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
  )
}

export default AddContact;