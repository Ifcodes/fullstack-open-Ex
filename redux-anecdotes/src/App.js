import React, {useEffect} from 'react'
import NewAnecdote from './components/AnecdoteForm'
import Notification from './components/Notification'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filtercomponent'
import anecdoteServices from './services/anecdotes'
import {initializeAnecdotes, asObject} from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    anecdoteServices
    .getAll().then(anecs => dispatch(initializeAnecdotes(anecs)))
     
  }, [dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <Notification />
      <AnecdoteList />
      <NewAnecdote />
    </div>
  )
}

export default App