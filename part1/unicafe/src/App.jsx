import { useState } from 'react'

const Display = (props) => {
  return (
    <div>{props.category} {props.value} {props.unit}</div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const average = (total === 0) ? 0 : (good * 1 + neutral * 0 + bad * (-1)) / total
  const positive = (total === 0) ? 0 : (good / total) * 100

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>Statistics</h1>
      <Display category="good" value={good}></Display>
      <Display category="neutral" value={neutral}></Display>
      <Display category="bad" value={bad}></Display>
      <Display category="all" value={total}></Display>
      <Display category="average" value={average}></Display>
      <Display category="positive" value={positive} unit="%"></Display>
    </div>
  )
}

export default App