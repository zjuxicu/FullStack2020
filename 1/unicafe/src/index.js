import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {

    if (props.allClicks === 0) {
        return ('No feedback given')
    }
    const average = (good, bad, allClicks) => {
        return (good - bad) / allClicks
    }
    const positive = (good, allClicks) => {
        return (good / allClicks) * 100
    }
    return (
        <div>good {props.good} <br/>
            neutral {props.neutral} <br/>
            bad {props.bad} <br/>
            all {props.allClicks} <br/>
            average {average(props.good, props.bad, props.allClicks)} <br/>
            positive {positive(props.good, props.allClicks)}%</div>
    )
}

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
        {text}
    </button>
)
const App = props => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const allClicks = good + neutral + bad

    const handleGoodClick = () => {
        setGood(good + 1)
    }
    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
    }
    const handleBadClick = () => {
        setBad(bad + 1)
    }


    return (
        <div>
            <h1>give feedback</h1>

            <Button onClick={handleGoodClick} text='good'></Button>
            <Button onClick={handleNeutralClick} text='neutral'></Button>
            <Button onClick={handleBadClick} text='bad'></Button>
            <h1>statistics</h1>
            <Statistics good={good} bad={bad} neutral={neutral} allClicks={allClicks}></Statistics>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)