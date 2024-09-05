
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

  export default Course