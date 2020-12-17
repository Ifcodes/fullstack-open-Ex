import React from 'react'


const Parts = (props) => {
  return(
   <p>
     {props.name} {props.exercises}
   </p>
  )
}
const Content = (props) => {
  return(
    <>
      {props.parts.map(part => 
        <Parts key={part.id} name={part.name} exercises={part.exercises}/> 
       )}
    </>
  )
}

export default Content