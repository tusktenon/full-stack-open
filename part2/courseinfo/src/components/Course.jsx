function Course({ course }) {
  return (
    <>
      <Header text={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

function Header({ text }) {
  return <h2>{text}</h2>
}

function Content({ parts }) {
  return (
    <>
      {parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
    </>
  )
}

function Part({ part }) {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

function Total({ parts }) {
  const total = parts.reduce((acc, curr) => acc + curr.exercises, 0)
  return (
    <p>
      <strong>Total of {total} exercises</strong>
    </p>
  )
}

export default Course
