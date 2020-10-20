import React from 'react';
import Statistic from './Statistic';

const Stats = ({ good, bad, neutral }) => {
  const all = good + bad + neutral;
  const average = good + (bad * -1) + (neutral * 0);
  const percent = `${good > 0 ? good / all * 100 : 0}%`;

  return (
    <>
      <h1>Statistics</h1>

      {(good > 0 || (neutral > 0) || bad > 0)

        ? <ul>
          <Statistic
            text='Good'
            value={good}
          />
          <Statistic
            text='Neutral'
            value={neutral}
          />
          <Statistic
            text='Bad'
            value={bad}
          />
          <Statistic
            text='All'
            value={all}
          />
          <Statistic
            text='Average'
            value={average}
          />
          <Statistic
            text='Positive'
            value={percent}
          />
        </ul>

        : <p>No feedback given</p>}
    </>
  );
};

export default Stats
;
