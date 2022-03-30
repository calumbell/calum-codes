import React from 'react';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs'
import { GatsbyImage } from 'gatsby-plugin-image';
import { HomePage } from '../types';
import { Bubbles, SocialMedia } from '../components';
import Hero from '../components/Hero';

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
      <Hero 
        title="Hi, I am Calum"
        bio={data.prismicHomepage.data.bio.text}
      />
    <SocialMedia />
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
          text
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