import React, { useState, useEffect } from 'react'
import axios from 'axios'

// const Show = ({countryName, countryCapital, countryPopu, countryLang, countryImg, oneCountry}) => {

//   const handleShow = () => {
//     return oneCountry
//   }
//   return (
//     <> 
//     <h1>
//       {countryName}
//       <button onClick={handleShow}>Show</button>
//     </h1>
//   </>
//   )
// }

// const showCountry = (alpha3Code) {

// } 
const Countries = ({country,setSelectedCountry}) => {

  return(
    <> 
      <p key={country.alpha3Code}>
        {country.name}
      </p>
      <button onClick={() => setSelectedCountry([country])}>Show</button>
    </>
  )
}
const Country = ({country, setSelectedCountry}) => {
 
  return(
    <> 
      <button onClick={() => setSelectedCountry([])}>Back</button>
      <h1>
        {country.name}
        {/* <button onClick={handleShow}>Show</button> */}
      </h1>
      <p>
        Capital: {country.capital}
      </p>
      <p>
        Population: {country.population}
      </p>
      <h3>
        Languages: 
      </h3>
        <ul>
          {country.languages.map((lang, langIndex) => <li key={`${country.alpha3Code}_lang-${langIndex}`}>{lang.name}</li>)}
        </ul>
      
      <img src={country.flag} alt={country.name} width="100"/>
    </>
  )
}

const CountriesList = ({countries,searchField}) => {
  const [selectedCountry, setSelectedCountry] = useState([])

  const filtered = countries.filter(country => country.name.toLowerCase().includes(searchField.toLowerCase()))

  const countryNameList = countries.map(country => country.name)

  const countryToDisplay = searchField.trim() ? filtered : countryNameList
  
  // const alpha3Code = (alpha) => {
  //   countries.forEach(country => country.alpha3Code === alpha ? setSelectedCountry({state: true}) : country)
  // } 
  // const handleShow = () => {
  //   return oneCountry
  // }

  const oneCountry = countryToDisplay.map(country => <Country key={country.alpha3Code} country={country}/>)

  
  const multiCountries = countryToDisplay.map(country => <Countries key={country.alpha3Code} country={country} setSelectedCountry={setSelectedCountry} />)
  
 

  // const selectedCountry = <Show oneCountry={oneCountry}/>

  const showCountries = countryToDisplay.length >= 10 ? "Too many matches, specify another filter" : countryToDisplay.length === 1 ? oneCountry : multiCountries

  
  // const countryLang = langArr.map(lang => lang.name)
  // console.log(langArr)
 
  return(
      <>
        {!selectedCountry.length ? showCountries : <Country country={selectedCountry[0]} setSelectedCountry={setSelectedCountry}/>}
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
