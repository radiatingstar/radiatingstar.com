import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import SEO from '../components/seo'
import Header from '../components/Header'
import { rhythm } from '../utils/typography'

const Container = styled.div``

const PostsBlock = styled.section`
  margin: ${rhythm(2)} auto;
  background: white;
  max-width: 40rem;
  padding: ${rhythm(1)};
`

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    return (
      <Container>
        <SEO title="Radiating Star" />
        <Header />
        <PostsBlock>
          <h3>Recent Posts</h3>
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
          <Link to="/blog">Go to the blog</Link>
        </PostsBlock>
      </Container>
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
