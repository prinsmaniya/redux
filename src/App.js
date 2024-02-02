import React from 'react'
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, demo, demo1 } from './counter/counterSlice';

function App() {
    const count = useSelector((state) => state.counter.value)
    const name = useSelector((state) => state.counter.name)
    const email = useSelector((state) => state.counter.email)
    const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>VALUE : {count}</h1>
      <h1>Name : {name}</h1>
      <h1>Email : {email}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button><br/>
      <button onClick={() => dispatch(demo())}>Increment By 5</button>
      <button onClick={() => dispatch(demo1())}>Decrement By 5</button>
    </div>
  );
}

export default App;
