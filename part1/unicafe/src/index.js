import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Feedback from './components/Feedback';
import Stats from './components/Stats';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <Feedback
        good={good}
        neutral={neutral}
        bad={bad}
        setGood={setGood}
        setNeutral={setNeutral}
        setBad={setBad}
      />
      <Stats
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </>
  );
};

ReactDOM.render(<App />,
  document.getElementById('root')
);
