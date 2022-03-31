import React from 'react'
import { Bubbles }  from '../';
import * as styles from './Hero.module.scss';

type HeroProps = {
  title: string;
  bio: string;
}

const Hero = ({ title, bio }: HeroProps) => {
  return (
    <div className={styles.heroContainer}>
      {title && <h1 className={styles.heroTitle}>{title}</h1>}
      {bio && <p className={styles.heroBio}>{bio}</p>}
      <Bubbles />
    </div>
  )
}

export default Hero;