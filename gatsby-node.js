/* eslint-disable unicorn/prefer-module */
// eslint-disable-next-line @typescript-eslint/no-var-requires,unicorn/prefer-module
const path = require(`path`)
// eslint-disable-next-line @typescript-eslint/no-var-requires,unicorn/prefer-module
const { createFilePath } = require(`gatsby-source-filesystem`)

// TODO: extract all those functions to separate modules.

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = path.resolve(`./src/blog/templates/blog-post.template.tsx`)
  return graphql(
    `
      query AllBlogPosts {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    for (const [index, post] of posts.entries()) {
      const previous =
        index === posts.length - 1 ? undefined : posts[index + 1].node
      const next = index === 0 ? undefined : posts[index - 1].node

      createPage({
        path: "/blog" + post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    }
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
