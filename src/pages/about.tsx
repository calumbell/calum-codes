import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import React from 'react'
import { AboutPage } from '../types'

interface GraphQLResponse {
  data: {
    prismicAboutpage: {
      data: AboutPage
    }
  }
};

const About = ({ data }: GraphQLResponse) => {
  return (
    <main className='container'>
      <h1>{data.prismicAboutpage.data.title.text}</h1>
      <article>{RichText.render(data.prismicAboutpage.data.content.richText)}</article>
    </main>
  )
}

export default About;

export const query = graphql`
  query AboutPage {
    prismicAboutpage {
      data {
        title {
          text
        }
        content {
          richText
        }
      }
    }
  }
`;