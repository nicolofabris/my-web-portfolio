import './AboutContentStyles.css'

import React from 'react'
import { Link } from 'react-router-dom'
import Mern from '../assets/mern.png'
import FullStack from '../assets/fullstack.png'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>I am a full-stack developer. I like to create and design easy-to-use websites</p>
            <Link to='/contact'>
            <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={Mern} alt={Mern} className="img"/>
                </div>
                <div className="img-stack bottom">
                    <img src={FullStack} alt={FullStack} className="img"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent