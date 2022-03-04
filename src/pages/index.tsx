import React from 'react';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs'
import { GatsbyImage } from 'gatsby-plugin-image';
import { HomePage } from '../types';

interface GraphQLResponse {
  data: {
    prismicHomepage: {
      data: HomePage;
    }
  }
}

const IndexPage = ({ data }: GraphQLResponse) => {
  console.log(data);
  return(
    <main className='container'>
      <h1>{data.prismicHomepage.data.title.text}</h1>
      <article>{RichText.render(data.prismicHomepage.data.bio.richText)}</article>
      <GatsbyImage 
        image={data.prismicHomepage.data.hero_image.gatsbyImageData}
        alt={data.prismicHomepage.data.hero_image.alt}
      />
    </main>
  );
}

export default IndexPage;

export const query = graphql`
  query GetHomePage {
    prismicHomepage {
      data {
        title {
          text
        }
        bio {
          richText
        }
        hero_image {
          gatsbyImageData
          alt
        }
      }
    }
  }
`