import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

store.subscribe(() => {
  const storeNow = store.getState()
  console.log(storeNow)
})
const App = () => {

  return (

    <div>
      <button onClick={e => store.dispatch({ type: 'GOOD' })} > hyvä</button>
      <button onClick={e => store.dispatch({ type: 'OK' })} > neutraali</button>
      <button onClick={e => store.dispatch({ type: 'BAD' })} > huono</button>
      <button onClick={e => store.dispatch({ type: 'ZERO' })} > nollaa tilastot</button>
    </div>

  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
