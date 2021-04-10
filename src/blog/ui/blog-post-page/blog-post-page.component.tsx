import { PageProps } from "gatsby"
import React, {
  FunctionComponent,
  JSXElementConstructor,
  PropsWithChildren,
} from "react"
import { BlogPostQuery, SitePageContext } from "../../../../graphql-types"
import { assertDefined } from "../../../assertions"
import { CoreLayout } from "../../../backbone"
import { SEO } from "../../../seo"
import { PostsNavigation } from "../posts-navigation/posts-navigation.component"

type Properties = Pick<
  PageProps<BlogPostQuery, SitePageContext>,
  "data" | "pageContext"
> & {
  layout?: JSXElementConstructor<PropsWithChildren<unknown>>
}

export const BlogPostPage: FunctionComponent<Properties> = ({
  data: { post, site },
  pageContext,
  layout: Layout = CoreLayout,
}) => {
  assertDefined(site)
  assertDefined(site.siteMetadata)
  assertDefined(post)
  assertDefined(post.frontmatter)
  assertDefined(post.frontmatter.title)
  assertDefined(post.excerpt)
  assertDefined(post.html)
  const author = site.siteMetadata.author
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <h1>{post.frontmatter.title}</h1>
      <p>
        <span>{post.frontmatter.date}</span>, by <span>{author}</span>
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <PostsNavigation {...pageContext} />
    </Layout>
  )
}
