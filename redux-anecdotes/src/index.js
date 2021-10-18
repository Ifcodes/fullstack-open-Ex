import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import App from './App'


// anecdoteServices.getAll().then(anecs => {
//     store.dispatch(initializeAnecdotes(anecs))
// })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)