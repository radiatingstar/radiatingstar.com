import React from "react"
import { SEO } from "../../../seo"
import { BlogLayout } from "../blog-layout/blog-layout.component"
import { PostsNavigation } from "../posts-navigation/posts-navigation.component"

// FIXME: Add types.
export const BlogPostPage = (properties: any) => {
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
      <div
        dangerouslySetInnerHTML={{ __html: post.html }}
        className="leading-normal"
      />
      <PostsNavigation {...properties.pageContext} />
    </BlogLayout>
  )
}
