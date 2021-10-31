import { PageProps } from "gatsby"
import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { HomePageQuery } from "../../../../graphql-types"
import { assertDefined } from "../../../assertions"
import { CoreLayout, WithLayout } from "../../../backbone"
import { RecentPosts, toBlogPostPreview } from "../../../blog"
import { SEO } from "../../../seo"
import { RecentSection } from "../recent-section/recent-section.component"

type Properties = WithLayout<Pick<PageProps<HomePageQuery>, "data">>
export const HomePage: FunctionComponent<Properties> = ({
  data: {
    recentPosts: { edges: postsEdges },
    site,
  },
  layout: Layout = CoreLayout,
}) => {
  assertDefined(site)
  assertDefined(site.siteMetadata)
  assertDefined(site.siteMetadata.title)
  const siteTitle = site.siteMetadata.title
  const posts = postsEdges.map(({ node }) => toBlogPostPreview(node))
  return (
    <Layout>
      <SEO title={siteTitle} />
      <RecentSection key="Recent posts">
        <RecentSectionHeading as={"h2"}>Recent posts</RecentSectionHeading>
        <RecentPosts posts={posts} key="posts" />
      </RecentSection>
    </Layout>
  )
}

const RecentSectionHeading = styled.h1`
  margin-block: 4rem;
  color: var(--yellow-700);
`
