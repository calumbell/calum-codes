import React from 'react';
import { graphql } from 'gatsby';
import { Project } from '../types';
import { TitleBanner } from '../components';

type GraphQLResponse = {
  data: {
    prismicProject: Project,
  }
};

const ProjectPage = ({ data } : GraphQLResponse ) => {
  const project = data.prismicProject.data;

  return (
    <main className='container'>
      <TitleBanner 
        title={project.title.text}
        image={project.banner}
      />
      <sub>{project.subtitle.text}</sub>
      <p>{project.content.text}</p>
      <p>
        <a 
          href={project.link.url}
          target='_blank'
        >
          Link
        </a>
      </p>
    </main>
  )
}

export default ProjectPage;

export const query = graphql`
  query ProjectPage($slug: String) {
    prismicProject (uid: {eq: $slug}) {
      data {
        title { text }
        subtitle { text }
        content { text }
        type
        banner {
          gatsbyImageData
          alt
        }
        link { url }
      }
    }
  }
`;