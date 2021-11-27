/* eslint-disable unicorn/prefer-module */
// eslint-disable-next-line @typescript-eslint/no-var-requires,unicorn/prefer-module
const path = require(`path`)
// eslint-disable-next-line @typescript-eslint/no-var-requires,unicorn/prefer-module
const { createFilePath } = require(`gatsby-source-filesystem`)

// TODO: extract all those functions to separate modules.

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = path.resolve(`./src/blog/templates/blog-post.template.tsx`)
  const blogByTagPost = path.resolve(
    `./src/blog/templates/posts-by-tag.template.tsx`
  )
  const postsQueryResult = await graphql(
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
  )

  if (postsQueryResult.errors) {
    throw postsQueryResult.errors
  }

  // Create blog posts pages.
  const posts = postsQueryResult.data.allMarkdownRemark.edges

  for (const [index, post] of posts.entries()) {
    createPage({
      path: "/blog" + post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
      },
    })
  }

  const taggedPostsQueryResult = await graphql(
    `
      query TaggedPosts {
        allMarkdownRemark {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  )

  const tags = taggedPostsQueryResult.data.allMarkdownRemark.group

  for (const [index, tag] of tags.entries()) {
    createPage({
      path: "/blog/tag/" + tag.fieldValue,
      component: blogByTagPost,
      context: {
        tag: tag.fieldValue,
      },
    })
  }
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
