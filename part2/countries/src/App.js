import React, { useState, useEffect } from 'react'
import axios from 'axios'

// const Search = () => {

// }
const Countries = ({countryName}) => {
 
  return(
    <> 
      <p>
        {countryName}
      </p>
    </>
  )
}
const Country = ({countryName,countryCapital,countryPopu,countryLang, countryImg}) => {
 
  return(
    <> 
      <h1>
        {countryName}
      </h1>
      <p>
        Capital: {countryCapital}
      </p>
      <p>
        Population: {countryPopu}
      </p>
      <p>
        Languages: 
        <ul>
          {countryLang.map(lang => <li>{lang.name}</li>)}
        </ul>
      </p>
      <img src={countryImg} alt={countryName}/>
    </>
  )
}

const CountriesList = ({countries,searchField,setCountries}) => {
  const filtered = countries.filter(country => country.name.toLowerCase().includes(searchField.toLowerCase()))

  const countryNameList = countries.map(country => country.name)

  const countryToDisplay = searchField.trim() ? filtered : countryNameList

  // const langArr = countries.map(country => country.languages)
  
  // const countryLang = langArr.find(lang => lang.name)

  
  const oneCountry = countryToDisplay.map(country => <Country countryName={country.name} countryCapital={country.capital} countryPopu={country.population} countryLang={country.languages} countryImg={country.flag}/>)

  const multiCountries = countryToDisplay.map(country => <Countries countryName={country.name}/>)

  const showCountries = countryToDisplay.length >= 10 ? "Too many matches, specify another filter" : countryToDisplay.length === 1 ? oneCountry : multiCountries

  
  // const countryLang = langArr.map(lang => lang.name)
  // console.log(langArr)
 
  return(
      <>
        {showCountries}
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
