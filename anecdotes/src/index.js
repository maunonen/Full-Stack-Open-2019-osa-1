import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [ points, setPoint] = useState(new Array(anecdotes.length).fill(0))
    
  const getSelected = () => {
        // get random number 
        // multiply by anecdotes length
        // use Floor on 
    const randomSelected = Math.floor(Math.random() * anecdotes.length )  
    setSelected( randomSelected)
  }
  const handlePoint = () =>{
    //arr.splice(2, 0, "Lene");
    //const copy = [...points]
    // increment the value in position 2 by one
    
    const copyPoints = [ ...points]
    copyPoints[selected] += 1  
     setPoint(
        copyPoints
    ) 


  } 

  return (
    <div>
        <h1>Anecdote of day</h1>
        <p>{props.anecdotes[selected]}</p>
        <button onClick = {handlePoint}>vote</button>
        <button onClick={ getSelected}>next anecdotes</button>
        <h1>anecdote with most votes</h1>
        <p>{props.anecdotes[points.indexOf(Math.max(...points))]}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)