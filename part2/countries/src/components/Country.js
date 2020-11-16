import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Country = ({ name, capital, population, languages, flag }) => {
  const [weather, setWeather] = useState({});

  const API_KEY = process.env.REACT_APP_WEATHER_KEY;

  useEffect(() => {
    console.log(capital);
    console.log(API_KEY);
    fetch(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${capital}`)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        setWeather(data);
      });
  }, [API_KEY, capital]);

  return (
    <>
      <h1>{name}</h1>
      <p>{capital}</p>
      <p>{population}</p>
      <h2>Languages:</h2>
      <ul>
        {languages.map((lang) => (
          <li key={lang.name}>{lang.name}</li>
        ))}
      </ul>
      <img src={flag} alt={`flag of ${name}`} />
      <h1>Weather in {capital}:</h1>
      {/* <p>Temperature: {weather.current.temperature}</p>
      <img src={weather.current.weather_icons[0]} alt={`icon of curent weather in ${capital}`} /> */}
    </>
  );
};

export default Country;
