import { useState } from 'react'

function Button({ handleClick, text }) {
  return <button onClick={handleClick}>{text}</button>
}

function StatisticsLine({ text, value }) {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

function Statistics({ good, neutral, bad }) {
  const all = good + neutral + bad
  if (all === 0) {
    return <p>No feedback given</p>
  }

  const average = (good - bad) / all
  const positive = 100 * (good / all)

  return (
    <table>
      <tbody>
        <StatisticsLine text='good' value={good} />
        <StatisticsLine text='neutral' value={neutral} />
        <StatisticsLine text='bad' value={bad} />
        <StatisticsLine text='all' value={all} />
        <StatisticsLine text='average' value={average.toFixed(3)} />
        <StatisticsLine text='positive' value={positive.toFixed(1) + ' %'} />
      </tbody>
    </table>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <section>
        <h1>Give Feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text='good' />
        <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
        <Button handleClick={() => setBad(bad + 1)} text='bad' />
      </section>

      <section>
        <h1>Statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </section>
    </>
  )
}

export default App
