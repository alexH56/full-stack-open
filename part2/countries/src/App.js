import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Country from './componenets/Country';

const App = () => {
  const [filter, setFilter] = useState('');
  const [countries, setCountries] = useState([]);
  const matches = filter
    ? countries.filter(country => country.name.toLowerCase().includes(`${filter.toLowerCase()}`))
    : [];

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((res) => setCountries(res.data));
  }, []);

  return (
    <>
      <form>
      search: <input
        onChange={handleFilterChange}
        value={filter}
              />
      </form>

      {matches.length

        ? matches.length > 10

          ? <p>Too many countries; be more specific</p>

          : matches.length === 1

            ? <Country
              name={matches[0].name}
              capital={matches[0].capital}
              population={matches[0].population}
              languages={matches[0].languages}
              flag={matches[0].flag}
              />

            : <ul>
              {matches.map((country) => (
                <li key={country.name}>{country.name}</li>))}
              </ul>

        : null}
    </>
  );
};

export default App;
