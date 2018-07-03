import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <ul>
        <li> <NavLink to='/' exact> Home </NavLink> </li>
        <li> <NavLink to='/about' exact> About </NavLink> </li>
        <li> <NavLink to='/help' exact> Help </NavLink> </li>
        <li> <NavLink to='/testthunkclient' exact> Test Thunk </NavLink> </li>
      </ul>
    </div>
  )
}

export default NavBar
