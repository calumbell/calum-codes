const path = require('path');

exports.createPages = async ({ graphql, actions}) => {
  const { data } = await graphql(`
    query GetProjects {
      allPrismicProject {
        nodes {
          uid
        }
      }
    }
  `);

  data.allPrismicProject.nodes.forEach(project => {
    actions.createPage({
      path: `projects/${project.uid}`,
      component: path.resolve(`./src/templates/project.tsx`),
      context: { slug: project.uid },
    })
  })
}