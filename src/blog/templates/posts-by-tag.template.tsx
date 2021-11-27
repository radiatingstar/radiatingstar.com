import { graphql } from "gatsby"
import { BlogTagPage } from "../ui/blog-tag-page/blog-tag-page.component"

export const query = graphql`
  query BlogTagPage($tag: String!) {
    site {
      siteMetadata {
        title
      }
    }
    taggedPosts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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

export default BlogTagPage
