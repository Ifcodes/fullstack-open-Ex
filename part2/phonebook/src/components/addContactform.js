import React from "react";
import phoneService from "../services/phonebook";

const AddContact = ({
  setNewName,
  newName,
  setPersons,
  setNumber,
  newNumber,
  persons,
  setNotification,
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
      number: `${newNumber}`,
    };

    phoneService
      .create(addName)
      .then((response) => {
        setNewName("");
        setNumber("");
        setNotification("Contact added successfully");
        setTimeout(() => {
          setNotification(null);
        }, 5000);
      })
      .catch((error) => {
        console.log(error.response.data.error);
        setNotification(error.response.data.error);
        setTimeout(() => {
          setNotification(null);
        }, 5000);
      });
  };

  const updateNumber = (person) => {

    const nameExist = person.name === newName
    const numberExist = person.number === newNumber

    const numberUpdate = {...person, number: newNumber};
    const nameUpdate = { ...person, name: newName};

    if(nameExist){

      phoneService
      .update(person.id, numberUpdate)
      .then((response) => {
        setPersons((persons) =>
          persons.map((p) => {
            if (person.id === p.id) return numberUpdate;
            return p;
          })
        )
        setNotification(`${person.name}'s Number changed successfully to ${newNumber}`);
          setTimeout(() => {
            setNotification(null);
          }, 5000);
      })
      .catch((error) => {
        console.log(error)
        setNotification(
          `Information of ${person.name} has already been removed from server`
        );
        setTimeout(() => {
          setNotification(null);
        }, 5000);
      });  
    }else if(numberExist){
      phoneService
      .update(person.id, nameUpdate)
      .then((response) => {
        setPersons((persons) =>
          persons.map((p) => {
            if (person.id === p.id) return nameUpdate;
            return p;
          })
        )
        setNotification(`Name changed from ${person.name} to ${newName} successfully!`);
          setTimeout(() => {
            setNotification(null);
          }, 5000);
      })
      .catch((error) => {
        setNotification(
          `Information of ${person.name} has already been removed from server`
        );
        setTimeout(() => {
          setNotification(null);
        }, 5000);
      });
    }
  };

  const checkAddContact = (event) => {
    event.preventDefault();

    const checkNewName = newName.toLowerCase();
    const personExist = persons.find(
      (person) => person.name.toLowerCase() === checkNewName
    );
    const numberExist = persons.find(
      (person) => person.number === newNumber
    );

    if (personExist) {
      if (
        window.confirm(
          `${newName} is already added to phonebook. Do you want to replace old number with new one?`
        )
      ) {
        updateNumber(personExist);
        setNewName(" ");
        setNumber(" ");
      }
    } else if (numberExist) {
      if (
        window.confirm(
          `PhoneNumber is already added to phonebook. Do you want to replace contact name with ${newName}?`
        )
      ) {
        updateNumber(numberExist);
        setNewName(" ");
        setNumber(" ");
      }
    } else {
      addContact();
    }
  };

  // const styles = {
  //   margin: "1rem 0",
  // };
  return (
    <>
      <form onSubmit={checkAddContact} className='addContactForm'>

      <h2>Add New Contact</h2>

      <div className='addName'>
        <p>Name:</p>
        <input value={newName} onChange={handleNewNames} required />
      </div>

      <div className='addNumber'>
        <p>Number:</p> 
        <input value={newNumber} onChange={handleNumbers} required />
      </div>

      <div>
        <button type="submit" className='addContactBtn'>Add</button>
      </div>

      </form> 
    </>
  );
};

export default AddContact;
