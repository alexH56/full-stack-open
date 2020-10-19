import React from 'react';

const Stats = ({ good, bad, neutral }) => {
  return (
    <>
      <h1>Statistics</h1>
      <ul>
        <li>{`Good: ${good}`}</li>
        <li>{`Neutral: ${neutral}`}</li>
        <li>{`Bad: ${bad}`}</li>
      </ul>
    </>
  );
};

export default Stats
;
