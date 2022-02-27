import { graphql } from 'gatsby';
import React from 'react';

type ProjectQuery = {
  data: {
    prismicProject: {
      data: {
        title: {
          text: string,
        },
        subtitle: {
          text: string,
        },
        content: {
          text: string,
        }
      }
    }
  }
};

const projectPage = ({ data } : ProjectQuery ) => {
  console.log(data)
  return (
    <main>
      <h1>{data.prismicProject.data.title.text}</h1>
      <sub>{data.prismicProject.data.subtitle.text}</sub>
      <p>{data.prismicProject.data.subtitle.text}</p>
    </main>
  )
}

export default projectPage;

export const query = graphql`
  query ProjectPage($slug: String) {
    prismicProject (uid: {eq: $slug}) {
      data {
        title {
          text
        }
        subtitle {
          text
        }
        content {
          text
        }
      }
    }
  }
`;