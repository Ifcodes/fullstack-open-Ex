const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

export const asObject = (anecdote) => {
  return {
    type: 'NEW_ANECDOTE',
    data: {
      content: anecdote,
      id: getId(),
      votes: 0
    }
  }
}

export const vote = (id) => {
    return {
      type: 'ADD_VOTE',
      id,
    }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_VOTE':
      const newState = [...state]
      // newState[action.id].votes++
      const increasedAnecdote = newState.find(anec => anec.data.id === action.id)
      increasedAnecdote.data.votes++

      return newState;
    case 'NEW_ANECDOTE':
      console.log(action.data)
      return state.concat(action.data);
    default:
      break;
  }

  return state
}

export default anecdoteReducer