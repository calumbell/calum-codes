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
        <GatsbyImage
          image={data.image}
          alt={data.imageAltText}
          className={styles.cardThumbnail}
        />

        <article className={styles.cardTextContainer}>

          <h2 className={styles.cardTitle}>{data.title}</h2>
          <p className={styles.cardSubtitle}>Website</p>

          <ul className={styles.projectTags}>
            <li>Tag 1</li>
            <li>Tag 2</li>
            <li>Tag 3</li>
          </ul>
        </article>
      </Link>

  )
}

export default Card;