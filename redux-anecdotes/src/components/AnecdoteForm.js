import { newAnecdote } from "../reducers/anecdoteReducer"
import { useDispatch } from "react-redux"


const NewAnecdote = () => {
  const dispatch = useDispatch()

  const createNew = (e) => {
    e.preventDefault()

    const content = e.target.anecdote.value
    e.target.anecdote.value = ''
    dispatch(newAnecdote(content))
  }
  return(
    <>
      <h2>create new</h2>
      <form onSubmit={createNew}>
        <div><input type="text" name='anecdote'/></div>
        <button type='submit'>create</button>
      </form>
    </>
  )
}

export default NewAnecdote