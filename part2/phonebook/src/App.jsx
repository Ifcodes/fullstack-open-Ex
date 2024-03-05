import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";
import phonebookServices from "./services/persons";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;

    if (name === "newName") {
      setNewName(event.target.value);
    }

    if (name === "newNumber") {
      setNewNumber(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nameExists = persons.find((person) => person.name === newName);

    if (nameExists) return alert(`${newName} is already added to phonebook`);

    const data = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    phonebookServices
      .createContact(data)
      .then((res) => {
        console.log({ res });
        setPersons(persons.concat(res));
      })
      .catch((err) => console.log(err));
  };

  const getPersons = () => {
    axios.get("http://localhost:3001/persons").then((res) => {
      setPersons(res.data);
    });
  };

  useEffect(getPersons, []);

  const filteredPersonsList = searchField
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(searchField.toLowerCase())
      )
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchField={searchField} setSearchField={setSearchField} />
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <Persons filteredPersonsList={filteredPersonsList} />
    </div>
  );
}

export default App;
