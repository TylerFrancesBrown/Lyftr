import { useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LiftDisplay from './liftDisplay.jsx';
import BodyDataDisplay from './bodyDataDisplay.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="main-container">
      <div className="left-column">
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>

      <div className="right-column">
        <LiftDisplay name="Bench Press" weight={275} date="2/14/25" set="275 x 1" rank="titan" icon={viteLogo}/>
        <LiftDisplay name="Squat" weight={315} date="4/6/2025" set="315 x 4" rank="platinum" icon={viteLogo}/>
        <LiftDisplay name="Deadlift" weight={365} date="4/7/2025" set="365 x 2" rank="champion" icon={viteLogo}/>
        <BodyDataDisplay weight={172} calories={2800} date="Apr 12, 2025" />
      </div>
    </div>
  )
}


export default App
