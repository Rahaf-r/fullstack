import React from 'react'
import ReactDOM from 'react-dom'

// const-definitions:

const Header = (props) => {
  console.log(props)
  return (
    <h1>
      {props.courseName}
    </h1>
  )
}

const Part = (props) => {
  return (<div>
    <p>
      {props.parts[0].name}
    </p>
    <p>
      {props.parts[1].name}
    </p>
    <p>
      {props.parts[2].name}
    </p>
  </div>


  )
}

const Content = (props) => {
  console.log('received props.parts: ' + props.parts);

  return (
    <div>
      <p>
        {props.parts[0].name} {props.parts[0].exercises}
      </p>
      <p>
        {props.parts[1].name} {props.parts[1].exercises}
      </p>
      <p>
        {props.parts[2].name} {props.parts[2].exercises}
      </p>
    </div>
  );

}
// Part
//Total
const Total = (props) => {
  return (
    <p>Number of exercises {props.parts[0].exercises
      + props.parts[1].exercises
      + props.parts[2].exercises}</p>
  );
}


// Here is the main component of the application
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };


  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))