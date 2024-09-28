/* eslint-disable react/prop-types */
import { useState } from 'react'

const Button = ({text, onSmash}) => <button onClick={onSmash}>{text}</button> 
const Statistic = ({statText, stats}) => {
  return (
    <tbody>
      <tr>
        <td>{statText}</td>
        <td>{stats}</td>
      </tr>
    </tbody>
  )
}

const Statistics = ({statistics}) => {
  const good = statistics[0]
  const neutral = statistics[1]
  const bad = statistics[2]
  const total = statistics[3]

  const average = () => {
    const result = (good - bad) /total
    if (isNaN(result)) return 0;
    return result.toFixed(1)
  }

  const positive = () => {
    const result = (good*100) / total
    if (isNaN(result)) return 0;
    return result.toFixed(1) + '%'
  }

  return (
    <>
    
    <h1>statistic</h1>
      {total == 0 ? (
        <p>No feedback given</p>
      ):( 
      <>
        <table>
          <Statistic statText='good' stats={good} />
          <Statistic statText='neutral' stats={neutral} />
          <Statistic statText='bad' stats={bad} />
          <Statistic statText='all' stats={total} />
          <Statistic statText='average' stats={average()} />
          <Statistic statText='positive' stats={positive()} />
        </table>
      </>
      )}
    </>
  )

}

function App() {
  const [goodCount, setGoodCount] = useState(0)
  const [neutralCount, setNeutralCount] = useState(0)
  const [badCount, setBadCount] = useState(0)
  const [total, settotal] = useState(0)

  const handleGoodClick = () => {
    setGoodCount(goodCount + 1)
    settotal(total + 1)
  }
  const handleNeutralClick = () =>{
     setNeutralCount(neutralCount + 1)
     settotal(total + 1)
    }
  const handleBadClick = () => {
    setBadCount(badCount + 1)
    settotal(total + 1)
  }

  return (
    <>
      <h1>give feedback</h1>
      <Button onSmash={handleGoodClick} text="good" />
      <Button onSmash={handleNeutralClick} text="neutral" />
      <Button onSmash={handleBadClick} text="bad"/>
      <Statistics statistics={[goodCount, neutralCount, badCount, total]} />
    </>
  )
}

export default App
