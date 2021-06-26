import { useState } from "react";

const App = ({ anecdotes }) => {
  const INITIAL_STATE = Array(anecdotes.length).fill(0);

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({ ...INITIAL_STATE });

  const voteAnecdote = () => {
    setVotes({
      ...votes,
      [selected]: votes[selected] + 1,
    });
  };

  const getRandomAnecdote = () => {
    const limit = anecdotes.length;
    const randomValue = Math.floor(Math.random() * limit);
    setSelected(randomValue);
  };

  return (
    <div>
      <button onClick={voteAnecdote}>Vote anecdote</button>
      <button onClick={getRandomAnecdote}>Next anecdote</button>
      <p>{anecdotes[selected]}</p>
      <p>{`This anecdote has ${votes[selected]} votes`}</p>
    </div>
  );
};

export default App;
