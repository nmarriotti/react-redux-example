import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import increment from './actions/counter'

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}

export default App;
