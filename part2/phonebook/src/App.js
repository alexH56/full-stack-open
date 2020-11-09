import React, { useEffect, useState } from 'react';
import Filter from './Components/Filter';
import EntryForm from './Components/EntryForm';
import Person from './Components/Person';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(res => {
        console.log(res);
        setPersons(res.data); 
});
  },
  []);

  const personsCopy = filter
    ? persons.filter(person => person.name.toLowerCase().includes(`${filter.toLowerCase()}`))
    : persons;

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (persons.map(person => person.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const entry = {
        name: newName,
        number: newNumber
      };
      setPersons(persons.concat(entry));
      setNewName('');
      setNewNumber('');
    }
  };

  return (
    <div>

      <Filter
        filter={filter}
        handleFilter={handleFilter}
      />

      <h2>Phonebook</h2>

      <EntryForm
        handleSubmit={handleSubmit}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <ul>
        {personsCopy.map(person => (
          <Person
            key={person.name}
            name={person.name}
            number={person.number}
          />
        ))}
      </ul>
    </div>
  );
};

export default App
;
