import React from 'react'
import Header from './header'
import Content from './content'
import Total from './total'


const Course = (props) => {
  return (
    <>
      <Header name={props.name}/>
      <Content  parts={props.parts}/> 
      <Total parts={props.parts}/>
    </>
  )
}

export default Course