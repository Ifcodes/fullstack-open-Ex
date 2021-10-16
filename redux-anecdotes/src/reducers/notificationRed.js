const initialNotification = {
  note: null
}
const notificationReducer = (state = initialNotification, action) => {
  switch (action.type) {
    case 'TRUE':
      const newState = {...state}
      newState.note = action.info
      return newState;

    default:
      return state;
  }
}

export const notification = (info) => {
  return {
    type: 'TRUE',
    info,
  }
}

export default notificationReducer