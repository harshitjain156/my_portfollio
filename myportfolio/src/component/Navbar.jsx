import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div>Navbar</div>
    <NavLink to='/'><div className="home">Home</div></NavLink>
    <NavLink to='/about'><div className="about">About</div></NavLink>    
    <NavLink to='/skills'><div className="skills">Skills</div></NavLink> 
    </>
  )
}

export default Navbar