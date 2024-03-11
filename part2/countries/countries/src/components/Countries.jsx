import Country from "./Country";

const Countries = ({ countries }) => {
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
      />
    );
  }

  return (
    <ul className="countries-list">
      {countries.map((country) => (
        <li key={country.name.common}>{country.name.common}</li>
      ))}
    </ul>
  );
};

export default Countries;
