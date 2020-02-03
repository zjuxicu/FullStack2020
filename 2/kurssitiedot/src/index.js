import React from 'react'
import ReactDOM from 'react-dom'

const Course = (props) => {
    const { course } = props
    return (
        <div>
            <Header course={course} />
            <Content parts={course.parts}></Content>
            <p>Total of <Total parts={course.parts}></Total> exercises</p>
            
        </div>
    )
}
const Header = (props) => {
    return (
        <div>
            <h1>{props.course.name}</h1>
        </div>
    )
}
const Content = ({ parts }) => {
    console.log('partsit', parts)
    return (

        <div>
            <ul>
                {parts.map((part, i) =>
                    <Part key={i} part={part}></Part>)}
            </ul>
        </div>
    )
}
const Part = ({ part }) => {
    return (
        <li>{part.name} {part.exercises}</li>
    )
}
const Total = ({ parts }) => {
    return parts.reduce(
        (a, p) => a + p.exercises,
        0
    )
}



const App = () => {
    const course = {
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
            }
        ]
    }

    return (
        <div>
            <Course course={course} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))