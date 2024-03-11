const Weather = ({ capital, temperature, icon, wind, weatherTitle }) => {
  return (
    <div>
      <h2>Weather in {capital}</h2>
      <p>Temperature is {temperature} deg celcius</p>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
        alt={weatherTitle}
      />
      <p>Wind Speed: {wind} m/s </p>
    </div>
  );
};

export default Weather;
