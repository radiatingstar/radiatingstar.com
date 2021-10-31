import { graphql } from "gatsby"
import { BlogPostPage } from "../ui/blog-post-page/blog-post-page.component"

export const pageQuery = graphql`
  query BlogPost($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      headings {
        value
      }
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        formattedDate: date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
    readMorePosts: allMarkdownRemark(
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

export default BlogPostPage
