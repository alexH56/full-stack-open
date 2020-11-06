import React, { useState } from 'react';
import Filter from './Components/Filter';
import EntryForm from './Components/EntryForm';
import Person from './Components/Person';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '502-555-5555' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

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
