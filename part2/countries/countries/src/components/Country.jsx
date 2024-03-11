import Weather from "./Weather";
import weatherSerices from "../services/weather";
import { useEffect, useState } from "react";
const Country = ({ name, capital, area, languages, flagUrl, lon, lat }) => {
  const [weather, setWeather] = useState(null);

  const getWeather = () => {
    weatherSerices
      .getWeather(lat, lon)
      .then((res) => setWeather(res))
      .catch((err) => console.log({ err }));
  };
  useEffect(getWeather, [lat, lon]);

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
      <Weather
        capital={capital}
        temperature={weather?.main?.temp}
        icon={weather?.weather[0]?.icon}
        wind={weather?.wind?.speed}
        weatherTitle={weather?.weather[0]?.main}
      />
    </div>
  );
};

export default Country;
