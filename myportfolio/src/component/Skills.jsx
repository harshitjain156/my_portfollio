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
       {'\u25CF'} Mern Stack Developer
      </li>
      <li>
      {'\u25CF'} App Developer
      </li>
      <li>
      {'\u25CF'} Graphic Designer
      </li>
      <li>
     {'\u25CF'} Machine Learning Enthusisatic
      </li>
      </ul>
      </div>
    </div>
  )
}

export default Skills 
