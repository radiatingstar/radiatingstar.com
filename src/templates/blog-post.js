import React from 'react'
import { graphql } from 'gatsby'
import BlogLayout from '../components/BlogLayout'
import SEO from '../components/seo'
import PrevNextNav from '../components/PrevNextNav'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const author = this.props.data.site.siteMetadata.author

    return (
      <BlogLayout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <h1>{post.frontmatter.title}</h1>
        <p className="mb-2 mt-2">{post.frontmatter.date}, by {author}</p>
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
