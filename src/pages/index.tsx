import { graphql } from "gatsby"
import { HomePage } from "../home"

export const query = graphql`
  query HomePage {
    site {
      siteMetadata {
        title
      }
    }
    recentPosts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
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

export default HomePage
