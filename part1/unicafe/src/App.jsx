import { useState } from 'react'

function Button({ handleClick, text }) {
  return <button onClick={handleClick}>{text}</button>
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = all && (good - bad) / all
  const positive = all && 100 * (good / all)

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
        <p>
          good: {good} <br />
          neutral: {neutral} <br />
          bad: {bad} <br />
          all: {all} <br />
          average: {average.toFixed(3)} <br />
          positive: {positive.toFixed(1)} %
        </p>
      </section>
    </>
  )
}

export default App
