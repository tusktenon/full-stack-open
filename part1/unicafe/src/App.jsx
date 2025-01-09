import { useState } from 'react'

function Button({ handleClick, text }) {
  return <button onClick={handleClick}>{text}</button>
}

function App() {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  return (
    <>
      <section>
        <h1>Give Feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text='good' />
        <Button handleClick={() => setBad(bad + 1)} text='bad' />
        <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      </section>

      <section>
        <h1>Statistics</h1>
        <p>
          good: {good} <br />
          bad: {bad} <br />
          neutral: {neutral}
        </p>
      </section>
    </>
  )
}

export default App
