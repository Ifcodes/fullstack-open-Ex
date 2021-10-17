import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { notification } from '../reducers/notificationRed'


const Notification = () => {

  const notification = useSelector(state => {
    if(state.notification.note === null){
      return null
    }
    return state.notification.note
  })

  const style = {
    border: 0,
    padding: 10,
    borderWidth: 1
  }
  return (
    <>
      <div style={style}>
        {notification}
      </div>
    </>
  )
}

export default Notification