import React from 'react'

const Total = (props) => {
  return(
    <>
      <strong>Total of {props.parts.reduce((acc,part) => acc + part.exercises, 0)} exercises</strong>
    </>
  )
}

export default Total