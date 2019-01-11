import React from 'react'
import { Link, graphql } from 'gatsby'
import SEO from '../components/seo'

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    return (
      <div>
        <SEO title="Radiating Star" />
        <h1>{siteTitle}</h1>
        <h2>Recent posts</h2>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3>
                <Link to={'/blog' + node.fields.slug}>{title}</Link>
              </h3>
            </div>
          )
        })}
        <Link to="/blog">All posts</Link>
      </div>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
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
