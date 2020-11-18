import React from 'react';

const Person = ({ name, number, id, handleDelete }) => (
  <li>{name}: {number} <button onClick={() => handleDelete(id, name)}>Delete</button></li>
);

export default Person;
