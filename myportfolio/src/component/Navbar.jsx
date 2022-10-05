import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <div>
      <div className='navbar'>
        <div className='brand'>My Portfolio</div>
        <div className='options'>
          <NavLink  className="home" to='/'><div>Home</div></NavLink>
          <NavLink className="about" to='/about'><div >About</div></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar