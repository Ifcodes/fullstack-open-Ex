import React from "react";
import phoneService from "../services/phonebook";

const AddContact = ({
  setNewName,
  newName,
  setPersons,
  setNumber,
  newNumber,
  persons,
}) => {
  const handleNewNames = (event) => {
    setNewName(event.target.value);
  };

  const handleNumbers = (e) => {
    setNumber(e.target.value);
  };

  const addContact = () => {
    const addName = {
      name: newName,
      id: persons.length + 1,
      phoneNumber: newNumber,
    };
    phoneService.create(addName).then((response) => {
      setNewName("");
      setNumber("");
    });
    phoneService.getAll().then((response) => {
      setPersons(response.data);
    });
  };

  const updateNumber = (person) => {
    // const numberToUpdate = persons;
    const numberUpdate = { ...person, phoneNumber: newNumber };

    phoneService.update(person.id, numberUpdate).then((response) =>
      setPersons((persons) =>
        persons.map((p) => {
          if (person.id === p.id) return numberUpdate;
          return p;
        })
      )
    );
  };

  const updateName = (person) => {
    // const numberToUpdate = persons;
    const nameUpdate = { ...person, name: newName };

    phoneService.update(person.id, nameUpdate).then((response) =>
      setPersons((persons) =>
        persons.map((p) => {
          if (person.id === p.id) return nameUpdate;
          return p;
        })
      )
    );
  };

  const checkAddContact = (event) => {
    event.preventDefault();
    const nameTest = newName.toLowerCase();
    const personExist = persons.find(
      (person) => person.name.toLowerCase() === nameTest
    );
    const numberExist = persons.find(
      (person) => person.phoneNumber === newNumber
    );

    if (personExist) {
      if (
        window.confirm(
          `${newName} is already added to phonebook. Do you want to replace old number with new one?`
        )
      ) {
        updateNumber(personExist);
        // setNewName(" ");
      }
    } else if (numberExist) {
      if (
        window.confirm(
          `PhoneNumber is already added to phonebook. Do you want to replace contact name with ${newName}?`
        )
      ) {
        updateName(numberExist);
        setNewName(" ");
        setNumber(" ");
      }
    } else {
      addContact();
    }
  };

  const styles = {
    margin: "1rem 0",
  };
  return (
    <form onSubmit={checkAddContact}>
      <div style={styles}>
        name: <input value={newName} onChange={handleNewNames} required />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumbers} required />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default AddContact;
