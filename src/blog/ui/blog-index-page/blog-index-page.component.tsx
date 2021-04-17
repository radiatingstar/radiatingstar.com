import { PageProps } from "gatsby"
import React, { FunctionComponent } from "react"
import { BlogIndexQuery } from "../../../../graphql-types"
import { assertDefined } from "../../../assertions"
import { CoreLayout } from "../../../backbone"
import { WithLayout } from "../../../backbone/types/with-layout.type"
import { SEO } from "../../../seo"
import { BlogPostInfo } from "../../types/blog-post-info"
import { PostsList } from "../posts-list/posts-list.component"

type Properties = WithLayout<Pick<PageProps<BlogIndexQuery>, "data">>

export const BlogIndexPage: FunctionComponent<Properties> = ({
  data: { allPosts },
  layout: Layout = CoreLayout,
}) => {
  const posts = allPosts.edges.map(({ node }) => {
    assertDefined(node.frontmatter)
    assertDefined(node.fields)
    assertDefined(node.excerpt)
    return node as BlogPostInfo
  })
  return (
    <Layout>
      <SEO title="All posts" />
      <PostsList posts={posts} />
    </Layout>
  )
}
