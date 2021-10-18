import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationRed'
import filterReducer from './reducers/filterReducer'
import { createStore, combineReducers } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

const reducers = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer,
  filter: filterReducer
})

export const store = createStore(reducers, composeWithDevTools())

