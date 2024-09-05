
// Courselist

const Courselist = ({ courses }) => (
  <>
    {courses.map(course => (
      <Course key={course.id} course={course} />
    ))}
  </>
)


// Course

const Course = ({ course }) => {

  const total = course.parts.reduce((sum, part) => {
    console.log('Adding...', sum, part.exercises)

    return sum + part.exercises
  }, 0)

  return (
    <>
      <Header courseName={course.name} />
      <Content courseParts={course.parts} />
      <strong>total of {total} exercises</strong>
    </>
  )
}

// Header

const Header = ({ courseName }) => <h2>{courseName}</h2>

// Part

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

// Content

const Content = ({ courseParts }) => (
  <>
    {courseParts.map(part => (
      <Part key={part.id} part={part} />
    ))}
  </>
)

// App

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web Development Curriculum</h1>
      <Courselist courses={courses}/>
    </div>
  )
}

export default App
