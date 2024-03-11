import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Countries from "./components/Countries";
import countriesServices from "./services/countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchField, setSearchField] = useState("");

  const getCountries = () => {
    countriesServices
      .getCountries()
      .then((res) => setCountries(res))
      .catch((err) => console.log({ err }));
  };

  useEffect(getCountries, []);

  const countryList = searchField
    ? countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchField.toLowerCase())
      )
    : countries;

  return (
    <>
      <h1>Countries</h1>
      <Filter searchField={searchField} setSearchField={setSearchField} />
      <Countries countries={countryList} />
    </>
  );
}

export default App;
