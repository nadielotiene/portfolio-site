import { useState } from 'react'
import linkedinLogo from './assets/linkedin.png'
import githubLogo from '/github.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://github.com/nadielotiene" target="_blank">
          <img src={githubLogo} className="logo" alt="gitHub logo" />
        </a>
        <a href="https://www.linkedin.com/in/kenneth-velazquez-41a051230/" target="_blank">
          <img src={linkedinLogo} className="logo react" alt="linkedin logo" />
        </a>
      </div>
      <h1>Kenneth Velázquez</h1>
      <h2>Frontend Developer</h2>
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
    </>
  )
}

export default App
