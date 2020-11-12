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
const Statistics = (props) => {
  if(props.good == 0 && props.neutral == 0 && props.bad == 0){
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
    <div>
          <h1>Statistics</h1>
          <tr>
            <td>{props.goodRemark} </td>
            <td>{props.good}</td>
          </tr>
          <tr>
            <td>{props.neutralRemark}</td>
            <td>{props.neutral}</td>
          </tr>
          <tr>
            <td>{props.badRemark}</td>
            <td> {props.bad}</td>
          </tr>
          <tr>
            <td>Total  </td>
            <td>{total || 0}</td>
          </tr>
          <tr>
            <td>Average  </td>
            <td>{newAv || 0}</td>
          </tr>
          <tr>
            <td>Positives  </td>
            <td>{positive || 0}%</td>
          </tr>
    </div>
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
    <div>
      <Heading />

      <Buttons good={good} neutral={neutral} bad={bad} setGood={setGood} setBad={setBad} setNeutral={setNeutral} goodRemark={goodRemark} badRemark={badRemark} neutralRemark={neutralRemark} />
      
      <table>
        <tbody>
         <Statistics goodRemark={goodRemark} badRemark={badRemark} neutralRemark={neutralRemark} good={good} neutral={neutral} bad={bad} />
        </tbody>
      </table>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))