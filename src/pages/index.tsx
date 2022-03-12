import React from 'react';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs'
import { GatsbyImage } from 'gatsby-plugin-image';
import { HomePage } from '../types';
import { Bubbles } from '../components';

interface GraphQLResponse {
  data: {
    prismicHomepage: {
      data: HomePage;
    }
  }
}

const IndexPage = ({ data }: GraphQLResponse) => {
  return(
    <main className='container'>
      <Bubbles />
      <article>{RichText.render(data.prismicHomepage.data.bio.richText)}</article>
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