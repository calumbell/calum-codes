import React from 'react';
import { graphql } from 'gatsby';
import { Project } from '../types';

type GraphQLResponse = {
  data: {
    prismicProject: Project,
  }
};

const projectPage = ({ data } : GraphQLResponse ) => {
  return (
    <main className='container'>
      <h1>{data.prismicProject.data.title.text}</h1>
      <sub>{data.prismicProject.data.subtitle.text}</sub>
      <p>{data.prismicProject.data.content.text}</p>
    </main>
  )
}

export default projectPage;

export const query = graphql`
  query ProjectPage($slug: String) {
    prismicProject (uid: {eq: $slug}) {
      data {
        title { text }
        subtitle { text }
        content { text }
        type
      }
    }
  }
`;