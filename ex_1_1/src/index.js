import React from 'react';
import ReactDOM from 'react-dom';

// Header - name of course 
const Header = (props) => {
    return (
        <div>
            <h1>{props.course.name}</h1>
        </div>
    )
}

// Content - render the parts and their number of exercises
const Content = (props) => {
        return (
        <div>
            <Part part = {props.course.parts[0]} />
            <Part part = {props.course.parts[1]} />
            <Part part = {props.course.parts[2]} />           
        </div>
    )
}

// Part component 

const Part = (props) => {
    return (
        <div>
            <p> {props.part.name} - {props.part.exercises}</p>
        </div>
    )
}

// Total render the total amount of exercises
const Total  = (props) => {
    return (
        <div>
            <p>Number of exercises: <strong>{props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</strong></p>
        </div>
    )
}


const App = () => {
    const course = {
        name : 'Half Stack application development', 
        parts : [
            {
                name : 'Fundamentals of React', 
                exercises : 10
            }, 
            {
                name : 'Using props to pass data', 
                exercises : 7
            }, 
            {
                name : 'State of a component', 
                exercises : 14
            }
        ]
        
    }

    
    
    return (
        <div>
            <Header course={course}/>
            <Content course={course}/>
            <Total course={course}/>
        </div>
    ) 
}


ReactDOM.render(<App />, document.getElementById('root'));


