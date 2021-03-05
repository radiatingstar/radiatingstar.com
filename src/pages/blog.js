import React from 'react'
import { graphql, Link } from 'gatsby'
import BlogLayout from '../components/BlogLayout'
import SEO from '../components/seo'

export default function BlogIndex(properties) {
  const { data } = properties
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <BlogLayout
      location={properties.location}
      title={siteTitle}
      style={{ paddingBottom: '5rem' }}
    >
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <div key={node.fields.slug} className="mt-6">
            <h2 className="mb-2 text-2xl text-yellow-500 font-bold">
              <Link className="shadow-none" to={'/blog' + node.fields.slug}>
                {title}
              </Link>
            </h2>
            <small>{node.frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        )
      })}
    </BlogLayout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
