import { useState } from 'react'

const Display = (props) => {
  return (
    <div>{props.feedback} {props.counter}</div>
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
      <h1>Statistics</h1>
      <Display feedback="good" counter={good}></Display>
      <Display feedback="neutral" counter={neutral}></Display>
      <Display feedback="bad" counter={bad}></Display>
    </div>
  )
}

export default App