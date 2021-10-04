import React from "react";
import phoneService from "../services/phonebook";
import ContactName from "./contacts";

const ContactList = ({ nameFilter, persons, setPersons, setNotification, user}) => {

  const filtered =  persons.filter((person) =>
      person.name.toLowerCase().includes(nameFilter.toLowerCase()))

  const personToDisplay = nameFilter.trim() ? filtered : persons;

  const handledelete = (id) => {
    console.log(id)

    const contactToDel = personToDisplay.find((person) => person.id === id);

    console.log(contactToDel)
    if (window.confirm(`Delete ${contactToDel.name}?`)) {
      phoneService
        .del(id)
        .then((response) => {
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((error) => {
          setNotification(
            `Information of ${contactToDel.name} has already been removed from server`
          );
          setTimeout(() => {
            setNotification(null);
          }, 5000);
        });
    }
  };
  return (
    <>
      {personToDisplay.length === 0 ? 'Contact not found' : personToDisplay.map((person) => (
        <ContactName
          key={person.id}
          person={person}
          handledelete={() => handledelete(person.id)}
        />
      ))}
    </>
  );
};

export default ContactList;
