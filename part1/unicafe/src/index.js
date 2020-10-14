import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Feedback from './components/Feedback';
import Stats from './components/Stats';

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <Feedback />
      <Stats />
    </>
  );
};

ReactDOM.render(<App />,
  document.getElementById('root')
);
