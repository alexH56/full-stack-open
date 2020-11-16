import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Country from './components/Country';

const App = () => {
  const [filter, setFilter] = useState('');
  const [countries, setCountries] = useState([]);
  const [selected, setSelected] = useState('');
  const matches = filter
    ? countries.filter(country => country.name.toLowerCase().includes(`${filter.toLowerCase()}`))
    : [];

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    if (selected) {
      setSelected('');
    }
  };

  const handleShow = (index) => {
    // console.log(matches[index]);
    setSelected(matches[index]);
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

          : selected

            ? <Country
              name={selected.name}
              capital={selected.capital}
              population={selected.population}
              languages={selected.languages}
              flag={selected.flag}
              />

            : <ul>
              {matches.map((country, index) => (
                <li key={country.name}>{country.name} <button onClick={() => handleShow(index)}>SHOW</button></li>
              ))}
              </ul>

        : null}
    </>
  );
};

export default App;
