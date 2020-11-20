import React from 'react'
// import Header from './Header'

const Parts = (props) => {
  return(
    <>
      <p>{props.name} {props.exercises}</p>
    </>
  )
}
const Content = (props) => {
  return(
    <>
      {props.parts.map((part, partindex) => <Parts key={partindex} name={part.name} exercises={part.exercises} />)}
    </>
  )
}

export default Content