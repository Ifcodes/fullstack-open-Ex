import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationRed'
import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer
})

export const store = createStore(reducers)

