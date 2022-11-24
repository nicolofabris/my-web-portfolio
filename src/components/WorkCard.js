import './WorkCardStyles.css'

import React from 'react'

import { Link } from 'react-router-dom'

const WorkCard = (props) => {
  return (
    <div className="project-card">
                <img src={props.imgsrc} alt='background'/>
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="btn-cont">
                    <Link to={props.source} target="_blank" className="btn">Github</Link>
                    </div>
                </div>
            </div>
  )
}

export default WorkCard