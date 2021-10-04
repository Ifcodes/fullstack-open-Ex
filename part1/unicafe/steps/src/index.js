import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Heading = () => {
  return (
    <div>
      <h1> Give Feedback</h1>
    </div>
  )
}

const Buttons = (props) => {
  const handleGoodClicks = () => props.setGood(props.good + 1)
  const handleNeutralClicks = () => props.setNeutral(props.neutral + 1)
  const handleBadClicks = () => props.setBad(props.bad + 1)
  
  return(
    <div>
      <button onClick={handleGoodClicks} title="click">Good</button>
      <button onClick={handleNeutralClicks} title="click">Neutral</button>
      <button onClick={handleBadClicks} title="click">Bad</button>
    </div>
  )
}
const Statistic = ({text, value}) =>{
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}
const Statistics = (props) => {
  if(props.good === 0 && props.neutral === 0 && props.bad === 0){
      return (
        <div>
          <h1>Statistics</h1>
          <p>No feedback yet</p>
        </div>
      ) 
  }
  let total = props.good + props.neutral + props.bad
  let newAv = (props.good * 1 + props.bad * -1) / total
  let positive = (props.good/total) * 100
 
  return (
    <>
      <h1>Statistics</h1>
      <Statistic text="good" value={props.good} />
      <Statistic text="neutral" value={props.neutral} />
      <Statistic text="bad" value={props.bad} />
      <Statistic text="Total" value={total || 0} />
      <Statistic text="Average" value={newAv || 0} />
      <Statistic text="Positives" value={`${positive || 0}%`} />
    </>
      )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const goodRemark = 'good'
  const neutralRemark = 'neutral'
  const badRemark = 'bad'

  return(
    <>
      <Heading />

      <Buttons good={good} neutral={neutral} bad={bad} setGood={setGood} setBad={setBad} setNeutral={setNeutral} goodRemark={goodRemark} badRemark={badRemark} neutralRemark={neutralRemark} />
      
      <table>
        <tbody>
         <Statistics goodRemark={goodRemark} badRemark={badRemark} neutralRemark={neutralRemark} good={good} neutral={neutral} bad={bad} />
        </tbody>
      </table>
    </>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))