import { useState } from 'react'
import linkedinLogo from './assets/linkedin.png'
import githubLogo from '/github.png'
import './App.css'

function App() {
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
      <h2>Frontend Web Developer</h2>
    </>
  )
}

export default App
