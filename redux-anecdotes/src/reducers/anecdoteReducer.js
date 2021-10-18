const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_VOTE':
      const newState = [...state]
      // newState[action.id].votes++
      const increasedAnecdote = newState.find(anec => anec.id === action.id)
      increasedAnecdote.votes++

      return newState;
    case 'NEW_ANECDOTE':
      console.log(action.data)
      state.concat(action.data);
      return state
    case 'INIT_ANECS':
      return action.data
    default:
      break;
  }

  return state
}


export const createAnec = (anecdote) => {
  return {
    type: 'NEW_ANECDOTE',
    data: anecdote
  }
}

export const vote = (id) => {
    return {
      type: 'ADD_VOTE',
      id,
    }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECS',
    data: anecdotes
  }
}
export default anecdoteReducer