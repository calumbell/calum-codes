import React from 'react';
import { graphql, Link } from 'gatsby';

interface Props {
  data: {
    allPrismicProject: {
      edges: Array<Node>
    }
  }
}

interface Node {
  node: {
    uid: string,
    data: {
      title: {
        text: string,
      },
      subtitle: {
        text: string,
      },
      thumbnail: {
        gatsbyImageData: any,
        alt: string,
      }
    }
  }
}

const ProjectsPage = ({ data } : Props) => {
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