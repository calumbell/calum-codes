import React from 'react';
import { Link } from 'gatsby';
import { Waves } from '../';
import * as styles from './Navbar.module.scss';

const Navbar = () => {
  const routes = [
    { name: 'Calum Codes', url: '/', },
    { name: 'About', url: '/about', },
    { name: 'Projects', url: '/projects'},
  ]

  return (
    <nav className={styles.navbar}>
      <Waves />
      {routes.map((route, i) => 
        <Link 
          to={route.url} 
          className={`${styles.navLink} text-shadow-dark uppercase letter-spacing-2`}
          key={i}
        >
          {route.name}
        </Link>
      )}

    </nav>
  )
}

export default Navbar