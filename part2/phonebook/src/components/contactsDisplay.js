import React from 'react'

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

const ContactList = ({nameFilter, persons}) =>{
  const filtered = () => {

    const filteredPerson = persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))
    return filteredPerson
  }

  const personToDisplay = nameFilter.trim() ? filtered() : persons
  return (
    <>
    {
      personToDisplay.map(person => 
      <ContactName key={person.id} person={person.name} phoneNumber={person.phoneNumber}/>)
    }
  </>
  )
}

export default ContactList