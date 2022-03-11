import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

interface CardProps {
  title: string,
  subtitle: string,
  url: string,
  image: IGatsbyImageData,
  imageAltText: string,
}

const Card = (data : CardProps) => {
  return (
    <article className='card'>
      <Link to={data.url}>
        <GatsbyImage image={data.image} alt={data.imageAltText} />
        <h2>{data.title}</h2>
        <sub>{data.subtitle}</sub>
      </Link>
    </article>
  )
}

export default Card;