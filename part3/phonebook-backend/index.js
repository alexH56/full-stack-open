const express = require('express');
const app = express();

let persons = [
  {
    name: 'Arto Hellas',
    number: '040-123456',
    id: 1
  },
  {
    name: 'Ada Lovelace',
    number: '39-44-5323523',
    id: 2
  },
  {
    name: 'Dan Abramov',
    number: '12-43-234345',
    id: 3
  },
  {
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
    id: 4
  }
];

app.use(express.json());

const generateId = () => {
  return Math.floor(Math.random() * 100);
};

app.get('/api/persons', (request, response) => {
  response.json(persons);
});

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  const entry = persons.find(person => person.id === id);

  entry
    ? response.json(entry)
    : response.status(404).end();
});

app.post('/api/persons', (request, response) => {
  const body = request.body;

  const names = persons.map(person => person.name.toLowerCase());

  if (names.includes(body.name.toLowerCase())) {
    return response.status(400).json({
      error: `${body.name} is already in the phonebook!`
    });
  }

  if (!body.name) {
    return response.status(400).json({
      error: 'no name was submitted'
    });
  }

  if (!body.number) {
    return response.status(400).json({
      error: 'no number was submitted'
    });
  }

  const person = {
    name: body.name,
    important: body.number,
    id: generateId()
  };

  persons = persons.concat(person);

  response.json(person);
});

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  const entry = persons.find(person => person.id === id);

  if (entry) {
    persons = persons.filter(person => person.id !== id);
    response.status(204).end();
  } else {
    response.status(404).end();
  }
});

app.get('/api/info', (request, response) => {
  response.send(`
    <p>There are currently ${persons.length} entries in the phonebook</p>
    <p>${new Date()}</p>
    `);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
