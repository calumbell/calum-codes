import React from 'react'
import { Link } from 'gatsby'
import * as styles from '../styles/Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <svg className={styles.wave}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 3600 150">
        <path 
          d="
            M0, 50 
            C600, 100, 1200, 100, 1800, 50 
            C2400, 0, 3000, 0, 3600, 50 
            L3600, 0  
            L0, 0"
        />
        <path 
          d="
            M0, 50 
            C220, 100, 440, 100, 660, 50 
            C880, 0, 1100, 0, 1320, 50 
            L1320, 0  
            L0, 0"
        />
        <path 
          d="
            M0, 50 
            C220, 100, 440, 100, 660, 50 
            C880, 0, 1100, 0, 1320, 50 
            L1320, 0  
            L0, 0"
        />
      </svg>
      <Link to='/'>Calum Codes</Link>
      <Link to='/about'>About</Link>
      <Link to='/projects'>Projects</Link>
    </nav>
  )
}

export default Navbar