import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { notification } from '../reducers/notificationRed'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes.sort((a, b) => b.data.votes - a.data.votes))
  
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
        <div key={anecdote.data.id}>
          <div>
            {anecdote.data.content}
          </div>
          <div>
            has {anecdote.data.votes}
            <button onClick={() => handleVotes(anecdote.data.id, `Voted ${anecdote.data.content}`)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList