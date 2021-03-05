import React from 'react'
import { graphql } from 'gatsby'
import BlogLayout from '../components/BlogLayout'
import SEO from '../components/seo'
import PreviousNextNav from '../components/PrevNextNav'

export default function BlogPostTemplate(properties) {
  const post = properties.data.markdownRemark
  const siteTitle = properties.data.site.siteMetadata.title
  const author = properties.data.site.siteMetadata.author

  return (
    <BlogLayout location={properties.location} title={siteTitle}>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <h1 className="font-bold text-3xl mt-6">{post.frontmatter.title}</h1>
      <p className="mb-2 mt-2 mb-6">
        {post.frontmatter.date}, by {author}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} className="leading-normal"/>
      <PrevNextNav {...properties.pageContext} />
    </BlogLayout>
  )
}

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
