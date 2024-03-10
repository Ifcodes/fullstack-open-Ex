import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";
import phonebookServices from "./services/persons";
import Notification from "./components/Notification";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchField, setSearchField] = useState("");
  const [notification, setNotification] = useState({
    type: "",
    message: "",
  });

  const getPersons = () => {
    axios.get("http://localhost:3001/persons").then((res) => {
      setPersons(res.data);
    });
  };

  const handleNotification = (message, type) => {
    setNotification({
      type,
      message,
    });

    setTimeout(() => {
      setNotification({
        type: "",
        message: "",
      });
    }, 3000);
  };

  useEffect(getPersons, []);

  const handleChange = (event) => {
    const name = event.target.name;

    if (name === "newName") {
      setNewName(event.target.value);
    }

    if (name === "newNumber") {
      setNewNumber(event.target.value);
    }
  };

  const updateContact = (data) => {
    phonebookServices
      .updateContact(data)
      .then((res) => {
        setNewName("");
        setNewNumber("");
        const updatedContact = persons.find((person) => person.id === res.id);
        setPersons(
          persons.map((person) => {
            if (person.id === updatedContact.id) {
              return {
                ...person,
                ...res,
              };
            }
            return person;
          })
        );
        handleNotification(
          `${res.name} has been updated successfully`,
          "success"
        );
      })
      .catch((err) => {
        handleNotification(`Failed to update. ${err.message}`, "error");
      });
  };

  const generateId = () => {
    return Math.random().toString(32).substring(1, 8);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nameExists = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    const data = {
      name: newName,
      number: newNumber,
      id: generateId(),
    };

    if (nameExists && nameExists.number !== newNumber) {
      if (
        window.confirm(
          `${nameExists.name} is already added to phonebook, replace old number with ${newNumber}?`
        )
      ) {
        const dataToUpdate = {
          ...nameExists,
          number: newNumber,
        };
        updateContact(dataToUpdate);
        return;
      }
    }

    phonebookServices
      .createContact(data)
      .then((res) => {
        setNewName("");
        setNewNumber("");
        setPersons(persons.concat(res));
        handleNotification(
          `${res.name} has been added successfully`,
          "success"
        );
      })
      .catch((err) => {
        handleNotification(`Failed to create!`, "error");
        console.log(err);
      });
  };

  const handleDelete = (id) => () => {
    if (window.confirm("Are you sure you want to delete?")) {
      phonebookServices
        .deleteContact(id)
        .then((res) => {
          const filteredPersons = persons.filter((p) => p.id !== res.id);
          setPersons(filteredPersons);
          handleNotification(
            `Contact has been deleted successfully.`,
            "success"
          );
        })
        .catch((err) => {
          console.log({ err });
          if (err?.response?.status === 404) {
            handleNotification(`Selected contact does not exist.`, "error");
          }
        });
    }
  };

  const filteredPersonsList = searchField
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(searchField.toLowerCase())
      )
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification.message} type={notification.type} />
      <Filter searchField={searchField} setSearchField={setSearchField} />
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <Persons
        filteredPersonsList={filteredPersonsList}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
