import React, {useState} from 'react';
import ReactDOM from 'react-dom';



const Button = (props) => {
  const handleClick = () => {
    props.setSelected(Math.floor(Math.random() * props.anecdotes.length))
   
  }
  const handleVotes = () => {
    props.setVotes(vote => vote.map((vts, index) => {
      console.log(vts)
      if(index === props.selected) vts+= 1
      if(vts > props.most.val) props.setMost({val: vts, index})
      return vts
    }))
  }
  return (
    <div>
      <button onClick={handleClick}>Next Anecdotes</button>
      <button onClick={handleVotes}>Vote</button>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [most, setMost] = useState({
    val: 0,
    index: 0
  })
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <p>has {vote[selected]} votes</p>
      <Button setSelected={setSelected} selected={selected} anecdotes={anecdotes} setVotes={setVotes} most={most} setMost={setMost} vote={vote}/>
      <h1>Anecdotes with most votes</h1>
      <p>{props.anecdotes[most.index]}</p>
      <p>has {most.val} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root'))
