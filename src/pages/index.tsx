import React from 'react';
import { graphql } from 'gatsby';
import { HomePage } from '../types';
import { RichText } from 'prismic-reactjs'
import { GatsbyImage } from 'gatsby-plugin-image';

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
    <main>
      <h1>{data.prismicHomepage.data.title.text}</h1>
      <GatsbyImage />
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