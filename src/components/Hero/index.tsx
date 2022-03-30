import React from 'react'
import { Bubbles }  from '../';

interface HeroProps {
  title: string;
  bio: string;
}

const Hero = ({ title, bio}: HeroProps) => {
  return (
    <div className='hero-container'>
      {title && <h1 className='hero-title fs-700'>{title}</h1>}
      {bio && <p className='hero-bio'>{bio}</p>}
      <Bubbles />
    </div>
  )
}

export default Hero;