import React from 'react'
import SEO from '../components/seo'
import { graphql } from 'gatsby'

function NotFoundPage() {
  return (
    <div>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
