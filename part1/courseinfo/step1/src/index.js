import React from 'react';
import ReactDOM from 'react-dom';

const Part =  (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

 const Course = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = ({parts}) => {
  return (
   <div>
    <p>{parts.map((part, partIdx)=> <Part key={partIdx} name={part.name} exercises={part.exercises} />)} </p> 
   </div>
  )
}

const Total = ({parts}) => {
  return (
    <div>
      <p>Number of exercises = {parts.reduce((acc, part) => acc + part.exercises, 0)}</p>
    </div>
  )
}

const App = () =>{
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    } 
  ]

  // const total = part1.exercises + part2.exercises + part3.exercises

  return (
    <div>
      <Course course={course}/>
      <Content parts={parts}/>
      <Total parts={parts} />
    </div>
  )
}  

ReactDOM.render(<App />, document.getElementById('root'))
