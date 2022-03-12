import React from 'react';
import { Link } from 'gatsby';
import { Waves } from '.';

const Navbar = () => {
  const routes = [
    { name: 'Calum Codes', url: '/', },
    { name: 'About', url: '/about', },
    { name: 'Projects', url: '/projects'},
  ]

  return (
    <nav className='navbar'>
      <Waves />
      {routes.map((route, i) => 
        <Link 
          to={route.url} 
          className='nav-link text-shadow-dark uppercase letter-spacing-2'
          key={i}
        >
          {route.name}
        </Link>
      )}

    </nav>
  )
}

export default Navbar