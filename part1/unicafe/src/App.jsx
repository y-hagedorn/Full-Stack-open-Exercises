import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  return (
    <div>{props.category} {props.value} {props.unit}</div>
  )
}

const Statistics = (props) => {

  const total = props.good + props.neutral + props.bad
  const average = (total === 0) ? 0 : (props.good * 1 + props.neutral * 0 + props.bad * (-1)) / total
  const positive = (total === 0) ? 0 : (props.good / total) * 100

  if (total === 0) {
    return (
      <>
        <h1>Statistics</h1>
        <div>No feedback given</div>
      </>
    )
  }

  return (
    <>
      <h1>Statistics</h1>
      <StatisticLine category="good" value={props.good} />
      <StatisticLine category="neutral" value={props.neutral} />
      <StatisticLine category="bad" value={props.bad} />
      <StatisticLine category="all" value={total} />
      <StatisticLine category="average" value={average} />
      <StatisticLine category="positive" value={positive} unit="%" />
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
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App