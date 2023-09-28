import React from 'react'
import airbnb from '/airbnb.png'
import quiz from '/quiz.png'
import dashboard from '/dashboard.png'
import user from '/user.png'
import beachball from '/beachball.png'
import drum from '/drum.png'
import password from '/password.png'
import whackamole from '/whack-a-mole.png'
import blackjack from '/blackjack.png'
import './index.css'

function Portfolio() {
    return (
        <section className="portfolio">
            <a href="https://nadielotiene.github.io/kenbnb/" target="_blank">
                <img src={airbnb} className="app-logos" alt="Airbnb app" />
                <h4>Airbnb clone</h4>
            </a>
            {/* <a href="" target="_blank">
                <img src={quiz} className="app-logos" alt="Quiz app" />
                <h4>Quiz app</h4>
            </a> */}
            <a href="https://nadielotiene.github.io/personal-dashboard/" target="_blank">
                <img src={dashboard} className="app-logos" alt="dashboard app" />
                <h4>Dashboard app</h4>
            </a>
            {/* <a href="" target="_blank">
                <img src={user} className="app-logos" alt="user app" />
                <h4>User app</h4>
            </a> */}
            <a href="https://nadielotiene.github.io/Kenneth-Velazquez-cohort223-landing-page-template-project/" target="_blank">
                <img src={beachball} className="app-logos" alt="resort app" />
                <h4>Resort app</h4>
            </a>
            <a href="https://nadielotiene.github.io/01_DrumKit/" target="_blank">
                <img src={drum} className="app-logos" alt="drum machine app" />
                <h4>Drum Machine app</h4>
            </a>
            <a href="https://nadielotiene.github.io/password-generator/" target="_blank">
                <img src={password} className="app-logos" alt="password generator app" />
                <h4>Password Generator</h4>
            </a>
            <a href="https://nadielotiene.github.io/30_WhackAMole/" target="_blank">
                <img src={whackamole} className="app-logos" alt="whack a mole app" />
                <h4>Whack-a-Mole</h4>
            </a>
            {/* <a href="" target="_blank">
                <img src={blackjack} className="app-logos" alt="blackjack app" />
                <h4>Blackjack</h4>
            </a> */}
        </section>
    )
}

export default Portfolio
