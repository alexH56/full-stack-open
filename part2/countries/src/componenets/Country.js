import React from 'react';

const Country = ({ name, capital, population, languages, flag }) => {
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
    </>
  );
};

export default Country;
