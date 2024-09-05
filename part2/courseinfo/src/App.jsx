const Course = ({ course}) => {

  const total = course.parts.reduce((sum, part) => {
    console.log('Adding...', sum, part.exercises);

    return sum + part.exercises;
  }, 0);

  return (
    <>
      <Header courseName={course.name} />
      <Content courseParts={course.parts} />
      <strong>total of {total} exercises</strong>

    </>
  )
}

const Header = ({ courseName }) => <h1>{courseName}</h1>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ courseParts }) => (
  <>
    {courseParts.map(part => (
      <Part key={part.id} part={part} />
    ))}
  </>
);

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
      ,
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App
