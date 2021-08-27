import React, { useState, useEffect } from "react";
import AddContact from "./components/addContactform";
import ContactList from "./components/contactsDisplay";
import Filter from "./components/searchComp";
import Login from "./components/login"
import phoneService from "./services/phonebook";
import Notifications from "./components/notification";
import "./index.css";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNumber] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [notification, setNotification] = useState(null);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)


  useEffect(() => {
    const loggedUser = window.localStorage.getItem('loggedUser')

    if(loggedUser){
      const user = JSON.parse(loggedUser)
      setUser(user)
      phoneService.setToken(user.token)
    }
  }, [])

useEffect(() => {
    phoneService.getAll().then((response) => {
      setPersons(response.data);
    }).catch((error) =>{
      setUser(null)
    });
  }, []);

  const handleLogout = () =>{
    window.localStorage.removeItem('loggedUser')
    setUser(null)
    setPersons([])
  }

  return (
    <div className='App'>
     {user === null ? '' 
     : 
      <div className='phone'>
       <h3>{user.name}</h3>
        <button onClick={handleLogout}>Logout</button>
      </div>
      }
      <h1>Phonebook</h1>

      <Notifications message={notification} />

      
      {user === null ? <Login 
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        setNotification={setNotification}
        user={user}
        setUser={setUser}
        setPersons={setPersons}
      /> : 
      <div>
         <AddContact
        setNewName={setNewName}
        newName={newName}
        setPersons={setPersons}
        setNumber={setNumber}
        newNumber={newNumber}
        persons={persons}
        setNotification={setNotification}
        />
        <Filter
        nameFilter={nameFilter}
        setNameFilter={setNameFilter}
        persons={persons}
      />

      <h2>Contact List</h2>

      <ContactList
        nameFilter={nameFilter}
        persons={persons}
        setPersons={setPersons}
        setNotification={setNotification}
        user={user}
      />
      </div>
     }
    </div>
  );
}

export default App;
