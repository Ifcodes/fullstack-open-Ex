import React, {useState} from "react";
import phoneService from "../services/phonebook";
import loading from "../images/icons8-loading-circle.gif"

const AddContact = ({
  setPersons,
  persons,
  setNotification,
  createContact,
}) => {
   const [newName, setNewName] = useState("");
  const [newNumber, setNumber] = useState("");

  const [icon, setIcon] = useState(false)

  const handleNewNames = (event) => {
    setNewName(event.target.value);
  };

  const handleNumbers = (e) => {
    setNumber(e.target.value);
  };

  const updateContact = (person) => {

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

    const personExist = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
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
        updateContact(personExist);
        setNewName(" ");
        setNumber(" ");
      }
    } else if (numberExist) {
      if (
        window.confirm(
          `PhoneNumber is already added to phonebook. Do you want to replace contact name with ${newName}?`
        )
      ) {
        updateContact(numberExist);
        setNewName(" ");
        setNumber(" ");
      }
    } else {
      createContact({
        name: newName,
        id: persons.length + 1,
        number: `${newNumber}`,
      })
      setNewName(" ");
      setNumber(" ");
    }
  };

  // const addLoader = () => {
  //   return(
  //     <button>
  //     </button>
  //   )
  // }
  return (
    <>
      <form onSubmit={checkAddContact} className='addContactForm'>

      <h2>Add New Contact</h2>

      <div className='addName'>
        <p>Name:</p>
        <input value={newName} onChange={handleNewNames} required className='addNameInput'/>
      </div>

      <div className='addNumber'>
        <p>Number:</p> 
        <input value={newNumber} onChange={handleNumbers} required />
      </div>

      <div>
        <button type="submit" className='addContactBtn' onClick={() => setIcon(true)}>{!icon ? "Add" :   <img src={loading} alt="loading..." className="loader"/>}</button>
      </div>

      </form> 
    </>
  );
};

export default AddContact;
