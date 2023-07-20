import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './About.jsx'
import Socials from './Socials.jsx'
import Skills from './Skills.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <h1 className="skills-title">Skills</h1>
    <Skills />
    <h1 className="skills-title">About</h1>
    <About />
    <h1 className="skills-title">Socials</h1>
    <Socials />
  </React.StrictMode>,
)
