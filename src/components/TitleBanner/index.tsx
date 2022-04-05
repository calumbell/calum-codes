import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as styles from './TitleBanner.module.scss';

type TitleBannerProps = {
  title: string,
  image: {
    gatsbyImageData: IGatsbyImageData,
    alt: string,
  }
}

const TitleBanner = ({title, image}: TitleBannerProps) => {
  return (
  <div className={styles.banner}>
    { image &&
      <GatsbyImage 
        className={styles.image}
        image={image.gatsbyImageData}
        alt={image.alt || ""}
      />
    }
    <h1 className={styles.title}>{title}</h1>
    
  </div>
  );
}

export default TitleBanner;