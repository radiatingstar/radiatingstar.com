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
      limit: 4
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

export default HomePage
