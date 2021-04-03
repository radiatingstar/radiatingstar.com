import { PageProps } from "gatsby"
import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { HomePageQuery } from "../../../../graphql-types"
import { assertDefined } from "../../../assertions"
import { CoreLayout } from "../../../backbone"
import { RecentPosts, toBlogPostPreview } from "../../../blog"
import { SEO } from "../../../seo"

const ContentSection = styled.section`
  margin: 1rem;
  padding: 1rem;
  background: white;
`

export const HomePage: FunctionComponent<PageProps<HomePageQuery>> = ({
  data: {
    recentPosts: { edges: postsEdges },
    site,
  },
}) => {
  assertDefined(site)
  assertDefined(site.siteMetadata)
  assertDefined(site.siteMetadata.title)
  const siteTitle = site.siteMetadata.title
  const posts = postsEdges.map(({ node }) => toBlogPostPreview(node))
  return (
    <CoreLayout>
      <SEO title={siteTitle} />
      <ContentSection>
        <RecentPosts posts={posts} />
      </ContentSection>
    </CoreLayout>
  )
}
