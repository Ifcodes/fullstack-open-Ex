import { asObject, createAnec, newAnecdote } from "../reducers/anecdoteReducer"
import { useDispatch } from "react-redux"
import anecdoteServices from "../services/anecdotes"


const NewAnecdote = () => {
  const dispatch = useDispatch()

  const createNew = async (e) => {
    e.preventDefault()
    const getId = () => (100000 * Math.random()).toFixed(0)
    const content = e.target.anecdote.value
    e.target.anecdote.value = ''
    const data = {
      content,
      id: getId(),
      votes: 0
    }
    const newAnec = anecdoteServices.createNew(data)
    dispatch(createAnec(newAnec))
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