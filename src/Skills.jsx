import React from 'react'
import htmlLogo from '/html-5.png'
import cssLogo from '/css.png'
import jsLogo from '/js.png'
import bsLogo from '/bootstrap.png'
import nodeLogo from '/node-js.png'
import reactLogo from './assets/react.svg'
import './App.css'

function Skills() {
    return (
        <section className="skills">
            <img src={htmlLogo} className="skills-logos" alt="HTML logo" />
            <img src={cssLogo} className="skills-logos" alt="CSS logo" />
            <img src={jsLogo} className="skills-logos" alt="JS logo" />
            <img src={bsLogo} className="skills-logos" alt="Bootstrap logo" />
            <img src={nodeLogo} className="skills-logos" alt="Node logo" />
            <img src={reactLogo} className="skills-logos" alt="React logo" />
        </section>
    )
}

export default Skills
