import { graphql } from "gatsby"
import { BlogIndexPage } from "../blog"

export const query = graphql`
  query BlogIndex {
    site {
      siteMetadata {
        title
      }
    }
    allPosts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            tags
            date
            formattedDate: date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  }
`

export default BlogIndexPage
