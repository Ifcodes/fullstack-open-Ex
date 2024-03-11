import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Countries from "./components/Countries";
import countriesServices from "./services/countries";
import Country from "./components/Country";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  const getCountries = () => {
    countriesServices
      .getCountries()
      .then((res) => setCountries(res))
      .catch((err) => console.log({ err }));
  };

  useEffect(getCountries, []);

  const handleSelectedCountry = () => (selCountry) => {
    setSelectedCountry(selCountry);
  };

  const handleSearch = (val) => {
    setSearchField(val);
    setSelectedCountry(null);
  };

  const countryList = searchField
    ? countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchField.toLowerCase())
      )
    : countries;

  return (
    <>
      <h1>Countries</h1>
      <Filter searchField={searchField} setSearchField={handleSearch} />
      {selectedCountry ? (
        <Country
          area={selectedCountry.area}
          name={selectedCountry.name.common}
          capital={selectedCountry.capital[0]}
          languages={Object.values(selectedCountry.languages)}
          flagUrl={selectedCountry.flags.svg}
          lon={selectedCountry.capitalInfo.latlng[1]}
          lat={selectedCountry.capitalInfo.latlng[0]}
        />
      ) : (
        <Countries
          countries={countryList}
          handleShowCountry={handleSelectedCountry()}
        />
      )}
    </>
  );
}

export default App;
