import React from 'react'
import { Link } from 'gatsby'

const NavBar = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/projects'>Projects</Link>
    </nav>
  )
}

export default NavBar