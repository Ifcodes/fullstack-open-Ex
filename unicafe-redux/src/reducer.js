const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      state.good++
      return state
    case 'OK':
      state.ok++
      return state
    case 'BAD':
      state.bad++
      return state
    case 'ZERO':
      state.bad = 0
      state.good = 0
      state.ok = 0
      return state
    default: return state
  }
}

export default counterReducer