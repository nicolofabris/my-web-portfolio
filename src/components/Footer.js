import React from 'react'
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'
import './FooterStyles.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color: "#fff" , marginRight: "2rem"}}/>
                    <div>
                   <p>Berlin, 12049</p> 
                   <p>Germany</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{ color: "#fff" , marginRight: "2rem"}}/>+49 15204134322</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{ color: "#fff" , marginRight: "2rem"}}/>nicolo.fabriss@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About myself</h4>
                <p>This is me, Nicolò Fabris, web developer and constant learner. I enjoy discussing new projects and design challenges</p>
                <div className="social">
                <FaGithub size={30} style={{ color: "#fff" , marginRight: "1rem"}}/>
                <FaLinkedin size={30} style={{ color: "#fff" , marginRight: "1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer