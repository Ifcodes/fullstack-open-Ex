import React from "react";
import phoneService from "../services/phonebook";

const ContactName = (props) => {
  return (
    <>
      <p>
        {props.person} <br />
        {props.phoneNumber}{" "}
        <button onClick={props.handledelete} style={{ margin: "0 1rem" }}>
          Delete
        </button>
      </p>
    </>
  );
};

const ContactList = ({ nameFilter, persons, setPersons }) => {
  const filtered = () => {
    const filteredPerson = persons.filter((person) =>
      person.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
    return filteredPerson;
  };

  const personToDisplay = nameFilter.trim() ? filtered() : persons;

  const handledelete = (id) => {
    const contactToDel = persons.find((person) => person.id === id);
    if (window.confirm(`Delete ${contactToDel.name}?`)) {
      phoneService.del(id, contactToDel).then((response) => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
  };
  return (
    <>
      {personToDisplay.map((person) => (
        <ContactName
          key={person.id}
          person={person.name}
          phoneNumber={person.phoneNumber}
          handledelete={() => handledelete(person.id)}
        />
      ))}
    </>
  );
};

export default ContactList;
