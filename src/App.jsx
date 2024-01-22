import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Link from "./Link.jsx";
import Button from "./Button.jsx";
import Container from "./Container.jsx";
import Input from "./Input.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Lisa Wall's Sandbox<br />to play around with React</h1>
      <p>For development, build and deploy I'm using Vite. <img src={viteLogo} className="logo vite" alt="Vite logo" /></p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Hit count: {count}
        </button>
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
