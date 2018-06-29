import React from 'react'
import { NavLink } from 'react-router-dom'

export default const Navbar = () => {
  return (
    <NavLink to='/' exact> Home </Navlink>
    <NavLink to='/about' exact> About </Navlink>
    <NavLink to='/help' exact> Help </Navlink>
  )
}
