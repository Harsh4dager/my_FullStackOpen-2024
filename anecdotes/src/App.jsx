/* eslint-disable react/prop-types */
import { useState } from 'react'

const Button = ({text, onhit}) => {
  return <button onClick={onhit}>{text}</button>
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
   
  const [obj, setObj] = useState({
    'selected': 0,
    'votes': { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 }
  })
  const [mostVoteIdx, setMostVoteIdx] = useState(0)

  const handleAncClick = () => {
    let idx = Math.floor(Math.random() * anecdotes.length)
    setObj((prevObj) => ({
      ...prevObj,
      'selected': idx
    }))
  }

  const handleVoteClick = () => {
    let new_obj = {
      ...obj,
      'votes': {
        ...obj.votes,
        [obj.selected]: obj.votes[obj.selected] + 1
      }
    }
    setObj(new_obj)
    setMostVoteIdx(AncWithMostVotes(new_obj.votes))  // Pass the updated votes object
  }

  const AncWithMostVotes = (votes) => {
    let tempVoteIdx = 0
    let maxVote = -1

    for (let idx in votes) {
      if (votes[idx] > maxVote) {
        maxVote = votes[idx]
        tempVoteIdx = idx
      }
    }

    return tempVoteIdx;
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[obj.selected]} </p>
      <p>has {obj.votes[obj.selected]} votes</p>
      <Button text={'vote'} onhit={handleVoteClick} />
      <Button text={'next anecdote'} onhit={handleAncClick} />

      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVoteIdx]}</p>
      <p>has {obj.votes[mostVoteIdx]} votes</p>
    </div>
  )
}

export default App
