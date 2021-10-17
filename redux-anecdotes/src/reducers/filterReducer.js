const initialFilterState = {
  filterState: ''
}
const filterReducer = (state = initialFilterState, action) => {
  switch (action.type) {
    case 'TRUE':
      const newState = {...state}
      newState.filterState = action.filter  
      return newState
    default:
      return state
  }
}

export const filterChange = (value) => {
  return {
    type: 'TRUE',
    filter: value
  }
}

export default filterReducer