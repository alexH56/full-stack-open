import React from 'react';

const Stats = ({ good, bad, neutral }) => {
  const all = good + bad + neutral;
  const average = good + (bad * -1) + (neutral * 0);
  const percent = good > 0 ? good / all * 100 : 0;

  return (
    <>
      <h1>Statistics</h1>

      {(good > 0 || (neutral > 0) || bad > 0)

        ? <ul>
          <li>{`Good: ${good}`}</li>
          <li>{`Neutral: ${neutral}`}</li>
          <li>{`Bad: ${bad}`}</li>
          <li>{`All: ${all}`}</li>
          <li>{`Average: ${average}`}</li>
          <li>{`Positive: ${percent}%`}</li>
        </ul>

        : <p>No feedback given</p>}
    </>
  );
};

export default Stats
;
