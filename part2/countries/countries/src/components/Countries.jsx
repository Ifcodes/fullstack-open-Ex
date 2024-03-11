import Country from "./Country";

const Countries = ({ countries, handleShowCountry }) => {
  if (countries.length > 10) {
    return <p>Too many matches. Please specify more filter.</p>;
  }

  if (countries.length === 1) {
    const country = countries[0];
    return (
      <Country
        area={country.area}
        name={country.name.common}
        capital={country.capital[0]}
        languages={Object.values(country.languages)}
        flagUrl={country.flags.svg}
        lon={country.capitalInfo.latlng[1]}
        lat={country.capitalInfo.latlng[0]}
      />
    );
  }

  return (
    <ul className="countries-list">
      {countries.map((country) => (
        <li key={country.name.common}>
          <span>{country.name.common}</span>
          <button onClick={() => handleShowCountry(country)}>Show</button>
        </li>
      ))}
    </ul>
  );
};

export default Countries;
