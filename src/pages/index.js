import React from 'react'
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'
import Header from '../components/Header'

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    return (
      <div>
        <SEO title={siteTitle} />
        <Header />
        <section className="m-2 bg-white max-w-lg p-2">
          <h3 className="font-bold text-2xl">Recent Posts</h3>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h4 className="my-4">
                  <Link
                    to={'/blog' + node.fields.slug}
                    className="text-2xl text-yellow-500"
                  >
                    {title}
                  </Link>
                </h4>
              </div>
            )
          })}
          <Link to="/blog">Go to the blog</Link>
        </section>
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
