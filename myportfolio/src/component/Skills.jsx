import React from 'react'
import './Skills.css'
import Image from '../assets/skills.png'

const Skills = () => {
  return (
    <div className="back1">
      <h1>Skills</h1>
      <div className="back2">
        <img src={Image} alt="Image"/>
      </div>
      <div className="cont">
      <ul>
      <li>
        Mern Stack Developer
      </li>
      <li>
        App Developer
      </li>
      <li>
        Graphic Designer
      </li>
      <li>
      Machine Learning Enthusisatic
      </li>
      </ul>
      </div>
    </div>
  )
}

export default Skills 
