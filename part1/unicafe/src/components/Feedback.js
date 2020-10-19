import React from 'react';
import Button from './Button';

const Feedback = ({ good, neutral, bad, setGood, setNeutral, setBad }) => {
  return (
    <>
      <h1>Give Feedback</h1>
      <Button
        text='Good'
        handleClick={() => setGood(good + 1)}
      />
      <Button
        text='Neutral'
        handleClick={() => setNeutral(neutral + 1)}
      />
      <Button
        text='Bad'
        handleClick={() => setBad(bad + 1)}
      />
    </>
  );
};

export default Feedback
;
