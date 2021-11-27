import { PageProps } from "gatsby"
import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { BlogIndexQuery } from "../../../../graphql-types"
import { assertDefined } from "../../../assertions"
import { CoreLayout, PageTitle, WithLayout } from "../../../backbone"
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
      <SEO
        title="All posts"
        description="Read and learn about programming, web development, React, CSS and other great tools."
      />
      <Title>Blog</Title>
      <PostsList posts={posts} />
    </Layout>
  )
}

const Title = styled(PageTitle)`
  margin-block: 2rem 4rem;
`
