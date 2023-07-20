import React from 'react'
import linkedinLogo from '/linkedin.png'
import githubLogo from '/github-sign.png'
import twitterLogo from '/twitter.png'
import gmailLogo from '/gmail.png'
import './index.css'

function Socials() {
    return (
        <footer className="footer">
            <a href="https://www.linkedin.com/in/kenneth-velazquez-41a051230/" target="_blank">
                <img src={linkedinLogo} className="footer-logos" alt="linkedIn logo" />
            </a>
            <a href="https://github.com/nadielotiene" target="_blank">
                <img src={githubLogo} className="footer-logos" alt="gitHub logo" />
            </a>
            <a href="https://twitter.com/KennethVelzque3" target="_blank">
                <img src={twitterLogo} className="footer-logos" alt="twitter logo" />
            </a>
            <a href="mailto: kenny.arcelay@gmail.com" target="_blank">
                <img src={gmailLogo} className="footer-logos" alt="gmail logo" />
            </a>
        </footer>
    )
}

export default Socials
