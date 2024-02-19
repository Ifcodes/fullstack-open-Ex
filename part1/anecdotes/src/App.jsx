import { useState } from "react";
import "./App.css";

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selected, setSelected] = useState(0);
  const [maxVote, setMaxVote] = useState(null);

  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  });

  const handleNextAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };

  const handleGetAnecdoteWithMostVote = (vts) => {
    const votesValue = Object.values(vts);
    const maxVoteIndex = votesValue.indexOf(Math.max(...votesValue));
    setMaxVote(maxVoteIndex);
  };

  const handleVote = () => () => {
    const newVotes = { ...votes, [selected]: votes[selected] + 1 };
    setVotes(newVotes);
    handleGetAnecdoteWithMostVote(newVotes);
  };

  return (
    <>
      <article>
        <h2>Anecdote of the day</h2>
        <p>
          {anecdotes[selected]} <strong>has {votes[selected]} votes</strong>
        </p>
        <button onClick={handleNextAnecdote}>Next Anecdote</button>
        <button onClick={handleVote()}>Vote</button>
      </article>
      <article>
        <h2>Anecdote with most votes</h2>
        <p>
          {anecdotes[maxVote]} <strong>has {votes[maxVote]} votes</strong>
        </p>
      </article>
    </>
  );
}

export default App;
