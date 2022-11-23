import './WorkCardStyles.css'

import React from 'react'

import { NavLink } from 'react-router-dom'

const WorkCard = (props) => {
  return (
    <div className="project-card">
                <img src={props.imgsrc} alt='background'/>
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="btn-cont">
                    <NavLink to={props.source} className="btn">Github</NavLink>
                    </div>
                </div>
            </div>
  )
}

export default WorkCard