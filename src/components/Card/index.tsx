import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as styles from './Card.module.scss';

interface CardProps {
  title: string,
  subtitle: string,
  url: string,
  image: IGatsbyImageData,
  imageAltText: string,
}

const Card = (data : CardProps) => {
  return (

      <Link 
        to={data.url} 
        className={`${styles.card} hover-shadow`}
      >
        <GatsbyImage image={data.image} alt={data.imageAltText} />
        <article className={styles.cardText}>
          <h2>{data.title}</h2>
          <sub className='ff-sans uppercase fs-200'>{data.subtitle}</sub>
        </article>
      </Link>

  )
}

export default Card;