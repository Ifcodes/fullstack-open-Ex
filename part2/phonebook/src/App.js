import React, { useState, useEffect } from "react";
import AddContact from "./components/addContactform";
import ContactList from "./components/contactsDisplay";
import Filter from "./components/searchComp";
import phoneService from "./services/phonebook";
import Notifications from "./components/notification";
import "./index.css";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNumber] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    phoneService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Phonebook</h1>

      <Notifications message={notification} />

      <Filter
        nameFilter={nameFilter}
        setNameFilter={setNameFilter}
        persons={persons}
      />

      <h2>Add New Contact</h2>

      <AddContact
        setNewName={setNewName}
        newName={newName}
        setPersons={setPersons}
        setNumber={setNumber}
        newNumber={newNumber}
        persons={persons}
        setNotification={setNotification}
      />

      <h2>Contact List</h2>

      <ContactList
        nameFilter={nameFilter}
        persons={persons}
        setPersons={setPersons}
        setNotification={setNotification}
      />
    </div>
  );
}

export default App;
