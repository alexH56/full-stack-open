import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Stats = () => {
  const { good, bad, neutral } = [0, 0, 0];

  return (
    <>
      <h1>Statistics</h1>
      <ul>
        <li>Good: {good}</li>
        <li>Bad: {bad}</li>
        <li>Neutral: {neutral}</li>
      </ul>
    </>
  );
};

export default Stats
;
