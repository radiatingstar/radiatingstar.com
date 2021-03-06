import { PageProps } from "gatsby"
import React, { FunctionComponent } from "react"
import { BlogPostQuery, SitePageContext } from "../../../../graphql-types"
import { assertDefined } from "../../../assertions"
import { SEO } from "../../../seo"
import { BlogLayout } from "../blog-layout/blog-layout.component"
import { PostsNavigation } from "../posts-navigation/posts-navigation.component"

export const BlogPostPage: FunctionComponent<
  PageProps<BlogPostQuery, SitePageContext>
> = ({ data: { post, site }, pageContext }) => {
  assertDefined(site)
  assertDefined(site.siteMetadata)
  assertDefined(post)
  assertDefined(post.frontmatter)
  assertDefined(post.frontmatter.title)
  assertDefined(post.excerpt)
  assertDefined(post.html)
  const author = site.siteMetadata.author
  return (
    <BlogLayout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <h1 className="font-bold text-3xl mt-6">{post.frontmatter.title}</h1>
      <p className="mb-2 mt-2 mb-6">
        {post.frontmatter.date}, by {author}
      </p>
      <div
        dangerouslySetInnerHTML={{ __html: post.html }}
        className="leading-normal"
      />
      <PostsNavigation {...pageContext} />
    </BlogLayout>
  )
}
