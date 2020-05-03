const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      posts: allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
      work: allContentfulWork {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve("./src/templates/blog-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
  data.work.edges.forEach(({ node }) => {
    createPage({
      path: `work/${node.slug}`,
      component: path.resolve("./src/templates/work-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
