function Header(props) {
  return <h1>{props.course}</h1>
}

function Content(props) {
  return (
    <>
      <Part part={props.content[0]} />
      <Part part={props.content[1]} />
      <Part part={props.content[2]} />
    </>
  )
}

function Part(props) {
  return (
    <p>
      {props.part.title} {props.part.exercises}
    </p>
  )
}

function Total(props) {
  const total = props.content.reduce((acc, curr) => acc + curr.exercises, 0)
  return <p>Number of exercises {total}</p>
}

function App() {
  const course = 'Half Stack application development'
  const content = [
    { title: 'Fundamentals of React', exercises: 10 },
    { title: 'Using props to pass data', exercises: 7 },
    { title: 'State of a component', exercises: 14 },
  ]

  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total content={content} />
    </div>
  )
}

export default App
