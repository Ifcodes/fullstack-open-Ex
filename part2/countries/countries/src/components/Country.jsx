const Country = ({ name, capital, area, languages, flagUrl }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>
        <strong>Capital: </strong>
        {capital}
      </p>
      <p>
        <strong>Area: </strong>
        {area}
      </p>
      <div>
        <strong>Languages</strong>
        <ul>
          {languages.map((lang) => (
            <li key={lang}>{lang}</li>
          ))}
        </ul>
      </div>
      <img src={flagUrl} alt={`${name}'s flag`} />
    </div>
  );
};

export default Country;
