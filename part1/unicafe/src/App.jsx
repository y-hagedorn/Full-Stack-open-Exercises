import { useState } from 'react'

const Display = (props) => {
  return (
    <div>{props.category} {props.value} {props.unit}</div>
  )
}

const Statistics = (props) => {

  let total = props.good + props.neutral + props.bad
  let average = (total === 0) ? 0 : (props.good * 1 + props.neutral * 0 + props.bad * (-1)) / total
  let positive = (total === 0) ? 0 : (props.good / total) * 100

  return (
    <>
      <h1>Statistics</h1>
      <Display category="good" value={props.good}></Display>
      <Display category="neutral" value={props.neutral}></Display>
      <Display category="bad" value={props.bad}></Display>
      <Display category="all" value={total}></Display>
      <Display category="average" value={average}></Display>
      <Display category="positive" value={positive} unit="%"></Display>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App