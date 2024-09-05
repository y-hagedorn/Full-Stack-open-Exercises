import { useState } from 'react'

const Anecdote = (props) => {

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{props.anecdotes[props.selected]}</div>
      <p>has {props.votes[props.selected]} votes</p>

    </> 
  )
}

const Favorite = (props) => {
  const mostVotes = Math.max(...props.votes)
  const mostVotedAnecdote = props.votes.indexOf(mostVotes)

  console.log('Most votes...', mostVotes)
  console.log('for anecdote...', mostVotedAnecdote)

  if (mostVotes === 0) {
    return (
      <>
        <h1>Anecdote with most votes</h1>
        <p>No votes at the moment</p>
      </>
    )
  }

  return (
    <>
      <h1>Anecdote with most votes</h1>
      <div>{props.anecdotes[mostVotedAnecdote]}</div>
      <p>has {mostVotes} votes</p>
    </>
  )

}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const voteForAnecdote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  console.log('votes...', votes)
  console.log('random number...', selected)

  return (
    <div>
      <Anecdote votes={votes} anecdotes={anecdotes} selected={selected}/>
      <button onClick={voteForAnecdote}>vote</button>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>next anecdote</button>
      <Favorite votes={votes} anecdotes={anecdotes}/>
    </div>
  )
}

export default App
