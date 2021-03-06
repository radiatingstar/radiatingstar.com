import { graphql } from "gatsby"
import { BlogIndexPage } from "../blog"

export const query = graphql`
  query BlogIndex {
    site {
      siteMetadata {
        title
      }
    }
    allPosts: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`

export default BlogIndexPage
