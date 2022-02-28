import React from 'react';
import { graphql, Link } from 'gatsby';
import { Project } from '../types';

interface GraphQLResponse {
  data: {
    allPrismicProject: {
      edges: {
        node: Project
      }[]
    }
  }
}

const ProjectsPage = ({ data }: GraphQLResponse) => {
  return (
    <main>
      <h1>Projects</h1>
      <ul>
        {data.allPrismicProject.edges.map(edge => {
          const project = edge.node.data;
          return(
            <li>
              <Link to={`/projects/${edge.node.uid}`}>
                <p>{project.title.text}</p>
                <p>{project.subtitle.text}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default ProjectsPage;

export const query = graphql`
  query GetProjects {
    allPrismicProject {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            subtitle {
              text
            }
            thumbnail {
              gatsbyImageData
              alt
            }
            content {
              text
            }
          }
        }
      }
    }
  }
`