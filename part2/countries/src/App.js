import React, { useState, useEffect } from 'react'
import axios from 'axios'

// const Search = () => {

// }

const App = () => {

  const [searchField, setSearchField] = useState('')
  const [countries, setCountries] = useState([])

  const handleSearchInput = (event) =>{
    setSearchField(event.target.value)
    console.log(event.target.value)
  }

  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data)
      console.log(response.data)
    })
  })
  return(
    <div>
      <h2>Search Country</h2 >
      <form>
        <input type="search" placeholder="Type here to search" value={searchField} onChange={handleSearchInput}/>
      </form>
    </div>
  )
}
export default App;
