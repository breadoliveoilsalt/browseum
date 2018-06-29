import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <NavLink to='/' exact> Home </NavLink>
      <NavLink to='/about' exact> About </NavLink>
      <NavLink to='/help' exact> Help </NavLink>
    </div>
  )
}

export default NavBar
