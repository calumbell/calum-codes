import React from 'react';
import { graphql } from 'gatsby';
import { Card } from '../components';
import { Project } from '../types';
import * as styles from '../styles/pages/projects.module.scss';


const ProjectsPage = ({ data }: GraphQLResponse) => {
  return (
    <main className='container'>
      <h1>Projects</h1>
      <ul className={styles.cardGrid}>
        {data.allPrismicProject.edges.map(edge => {
          const project = edge.node.data;
          return(
            <li>
              <Card
                url={`/projects/${edge.node.uid}`}
                title={project.title.text}
                subtitle={project.subtitle.text}
                image={project.thumbnail.gatsbyImageData}
                imageAltText={project.thumbnail.alt}
              />
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default ProjectsPage;

interface GraphQLResponse {
  data: {
    allPrismicProject: {
      edges: {
        node: Project
      }[]
    }
  }
}

export const query = graphql`
  query GetProjects {
    allPrismicProject {
      edges {
        node {
          uid
          data {
            title { text }
            type
            subtitle { text } 
            content { text }
            thumbnail {
              gatsbyImageData
              alt
            }
          }
        }
      }
    }
  }
`