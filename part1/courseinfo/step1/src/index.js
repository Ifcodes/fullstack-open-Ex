import React from 'react';
import ReactDOM from 'react-dom';

  
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
 


const Course = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
// Start of exercise 1.2
const Parts = (props) => {
  return (
    <div>
      <p>{props.chapter1} {props.exercise1}</p>
      <p>{props.chapter2} {props.exercise2}</p>
      <p>{props.chapter3} {props.exercise3}</p>
    </div>
  )
}
const Content = (props) => {
  return (
   <div>
    <Parts chapter1={part1} exercise1={exercises1} />
    <Parts chapter2={part2} exercise2={exercises2} />
    <Parts chapter3={part3} exercise3={exercises3} />
   </div>
  )
}
// end of exercise 1.2
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises = {props.amount}</p>
    </div>
  )
}

const App = () =>{
  const course = 'Half Stack application development'
  const total = exercises1 + exercises2 + exercises3 
  return (
    <div>
      <Course course={course}/>
      <Content />
      <Total amount={total} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
