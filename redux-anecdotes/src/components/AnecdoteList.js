import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { notification } from '../reducers/notificationRed'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => {
    
    const newAnecdoteState = !state.filter.filterState ? state.anecdotes : state.anecdotes.filter(anec => anec.content.toLowerCase().includes(state.filter.filterState.toLowerCase()))
    
    return newAnecdoteState.sort((a, b) => b.votes - a.votes)
  })
  
  const dispatch = useDispatch()

  const handleVotes = (voteId, info) => {
    dispatch(vote(voteId))
    dispatch(notification(info))
    setTimeout(() => {
      dispatch(notification(null))
    }, 5000)
  }

  return (
    <>
      {anecdotes.map((anecdote, index) =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVotes(anecdote.id, `Voted ${anecdote.content}`)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList