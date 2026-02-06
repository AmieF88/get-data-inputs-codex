import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Number1, setNumber1] = useState(0)
  const [Number2, setNumber2] = useState(0)
  const [result, setresults] = useState(0)
  const subtract = () => setresults(Number1 - Number2)
  const multiply = () => setresults(Number1 * Number2)
  const divide = () => setresults(Number2 !== 0 ? Number1 / Number2 : 0)


  const sum = () => {
    setresults(Number1 + Number2)
  }

  const clear = () => {
    setNumber1(0)
    setNumber2(0)
    setresults(0)
  }



  return (
    <>

      <h1>Calculator</h1>

      <div>
        <label>Number one</label>
        <input type="number" value={Number1} onChange={(e) => setNumber1(parseFloat(e.target.value) || 0)} />

        <label>Number two</label>
        <input type="number" value={Number2} onChange={(e) => setNumber2(parseFloat(e.target.value) || 0)} />
      </div>

      <div>
        <button onClick={sum}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={divide}>/</button>
      </div>

      <div>
        <button onClick={sum}>Calculate Sum</button>
        <button onClick={clear}>Clear</button>
      </div>



      <p>Result: {result}</p>
    </>
  )
}

export default App

