import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf, 0));

  const handleClick = () => () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const handleVote = () => () => {
    const pointsCopy = [...points];
    pointsCopy[selected] += 1;
    setPoints(pointsCopy);
  };

  return (
    <>
      <div>
        {`${anecdotes[selected]}`}
      </div>
      <div>
        {`has ${points[selected]} votes`}
      </div>
      <button onClick={handleClick()}>
        next anecdote
      </button>
      <button onClick={handleVote()}>
        vote
      </button>

    </>
  );
};

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
;
