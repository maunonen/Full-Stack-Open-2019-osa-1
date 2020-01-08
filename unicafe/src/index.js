import React, { useState} from 'react'
import ReactDOM from 'react-dom'

 const Statistic = (props) => {
    return (
        <tr>
            <td>{ props.text}</td>
            <td>{props.value}</td>
        </tr>
    )
}

// unicafe 1.8 -1.9
/* const Statistics = ({ good, neutral, bad, feedbackSum}) =>{

    if ( good + neutral + bad === 0 ) {
        return (
            <div>
                <p>No feedback given</p>
            </div>
        ) 
    } else {
        return (
            <div>
                <h1>statistics</h1>
                <p>good { good }</p>
                <p> neutral { neutral }</p>
                <p>bad { bad }</p>
                <p>all { }</p>
                <p>average { good + bad + neutral  ? ((feedbackSum)/(good + bad + neutral )) : 0 }</p>
                <p>positive { good + bad + neutral  ? (good/(good + bad + neutral) ) * 100 :  0 }%</p>
            </div>
        )
    }
}
 */

 const Button = (props) => {
    return (
        <button onClick={props.handleFeedBack}>{ props.text}</button>
    )
}
const App = () => {
  // save clicks of each button to own state
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [feedbackSum , setSum ] = useState(0)
  

  
    const handleFeedbackGood = () =>  {
        setGood( good + 1)
        setSum (feedbackSum + 1 )

    }
    const handleFeedbackNeutral = () => { 
        setNeutral( neutral + 1)
        setSum (feedbackSum + 0 )
        
    }
    
    const handleFeedbackBad = () =>  {
        setBad( bad + 1)
        setSum (feedbackSum + -1 )
        
    }

  return (
    <div>
        <h1>give feedback</h1>
        <Button 
            handleFeedBack= {handleFeedbackGood}
            text= {'good'}
        /> 
        <Button 
            handleFeedBack= {handleFeedbackNeutral}
            text= {'neutral'}
        /> 
        <Button 
            handleFeedBack= {handleFeedbackBad}
            text= {'bad'}
        /> 
        { (good + neutral + bad) ? 
            ( 
                <div>
                    <h1>statistics</h1>
                    <table>
                        <tbody>
                            <Statistic text="good" value ={good} />
                            <Statistic text="neutral" value ={neutral} />
                            <Statistic text="bad" value ={bad} />
                            <Statistic text="all" value ={good + neutral + bad} />
                            <Statistic text="average" value={ ((feedbackSum)/(good + bad + neutral )).toFixed(1)}/>
                            <Statistic text="positive" value ={ (((good)/(good + bad + neutral)) * 100).toFixed(2) + '%' } />
                        </tbody>
                    </table>
                </div>
            ) :
            (
                <div>
                    <h1>statistics</h1>
                    <p>No feedback given</p>
                </div>
            ) 
            
        }
        
        
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)