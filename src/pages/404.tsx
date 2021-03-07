import { graphql } from "gatsby"
import { NotFoundPage } from "../technical-pages"

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default NotFoundPage
