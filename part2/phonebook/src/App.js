import React, { useEffect, useState } from 'react';

import Filter from './Components/Filter';
import EntryForm from './Components/EntryForm';
import Person from './Components/Person';
import Message from './Components/Message';

import phonebookService from './Services/phone';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [message, setMessage] = useState(null);

  useEffect(() => {
    phonebookService
      .getPeople()
      .then(people => {
        setPersons(people);
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

    if (persons.map(person => person.name.toLowerCase()).includes(newName.toLowerCase())) {
      const existingEntry = persons.find(person => person.name.toLowerCase() === newName.toLowerCase());

      if (existingEntry.number !== newNumber) {
        const updatedEntry = {
          ...existingEntry,
          number: newNumber
        };

        phonebookService
          .updatePerson(existingEntry.id, updatedEntry)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== existingEntry.id ? person : returnedPerson));
            setMessage(`Updated ${returnedPerson.name} successfully`);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
            setNewName('');
            setNewNumber('');
          });
      } else {
        alert(`${newName} is already added to phonebook`);
      }
    } else {
      const entry = {
        name: newName,
        number: newNumber
      };

      phonebookService
        .addPerson(entry)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson));
          setMessage(`Added ${returnedPerson.name} successfully`);
          setTimeout(() => {
            setMessage(null);
          }, 5000);
          setNewName('');
          setNewNumber('');
        });
    }
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      phonebookService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id));
        });
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

      <Message
        message={message}
      />

      <ul>
        {personsCopy.map(person => (
          <Person
            key={person.name}
            name={person.name}
            number={person.number}
            id={person.id}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default App
;
