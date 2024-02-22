import { useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
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

    setPersons(persons.concat(data));
  };

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