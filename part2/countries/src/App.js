import React, { useState, useEffect } from 'react'
import axios from 'axios'

// const Search = () => {

// }
const Countries = ({countryName}) => {
 
  return(
    <p>
      {countryName}
    </p>
  )
}

const CountriesList = ({countries,searchField,setCountries}) => {
  const filtered = countries.filter(country => country.name.toLowerCase().includes(searchField.toLowerCase()))

  const countryList = countries.map(country => country.name)

  const countryToDisplay = searchField.trim() ? filtered : countryList
 
  return(
      <>
        {
          countryToDisplay.length >= 10 ? "Too many matches, specify another filter" :
          countryToDisplay.map(country => <Countries countryName={country.name}/>)
        }
      </>
  )
}
const App = () => {

  const [searchField, setSearchField] = useState('')
  const [countries, setCountries] = useState([])

  const handleSearchInput = (event) =>{
    setSearchField(event.target.value)
    // console.log(event.target.value)
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
      <h2>Display Country</h2>
      
      <CountriesList countries={countries} searchField={searchField} setCountries={setCountries}/>
    </div>
  )
}
export default App;
