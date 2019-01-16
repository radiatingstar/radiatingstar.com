import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import BlogLayout from '../components/BlogLayout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'
import PrevNextNav from "../components/PrevNextNav";

const PostMeta = styled.p`
  ${scale(-1 / 5)};
  display: block;
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(-1)};
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const author = this.props.data.site.siteMetadata.author

    return (
      <BlogLayout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <h1>{post.frontmatter.title}</h1>
        <PostMeta>{post.frontmatter.date}, by {author}</PostMeta>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <PrevNextNav {...this.props.pageContext}/>
      </BlogLayout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
