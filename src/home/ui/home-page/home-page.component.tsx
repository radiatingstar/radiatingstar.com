import { PageProps } from "gatsby"
import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { HomePageQuery } from "../../../../graphql-types"
import { assertDefined } from "../../../assertions"
import { CoreLayout } from "../../../backbone"
import { WithLayout } from "../../../backbone/types/with-layout.type"
import { RecentPosts, toBlogPostPreview } from "../../../blog"
import { ProjectPreview, RecentProjects } from "../../../projects"
import { SEO } from "../../../seo"
import { RecentSection } from "../recent-section/recent-section.component"

// TODO: move this somewhere else.
const projectsList: Array<ProjectPreview> = [
  {
    link: "https://github.com/mateuszkocz/3l",
    title: "Lots of Love for Less",
  },
  {
    link: "https://github.com/mateuszkocz/mail-generator",
    title: "Mail Generator",
  },
  {
    link: "https://github.com/radiatingstar/radiatingstar.com",
    title: "radiatingstar.com",
  },
]

type Properties = WithLayout<
  Pick<PageProps<HomePageQuery>, "data"> & {
    projects?: Array<ProjectPreview>
  }
>
export const HomePage: FunctionComponent<Properties> = ({
  data: {
    recentPosts: { edges: postsEdges },
    site,
  },
  projects = projectsList,
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
      <ContentSection>
        <Recents>
          <RecentSection>
            <RecentSectionHeading as={"h2"}>Recent posts</RecentSectionHeading>
            <RecentPosts posts={posts} />
          </RecentSection>
          <RecentSection>
            <RecentSectionHeading as={"h2"}>
              Recent Projects
            </RecentSectionHeading>
            <RecentProjects projects={projects} />
          </RecentSection>
        </Recents>
      </ContentSection>
    </Layout>
  )
}

const RecentSectionHeading = styled.h1`
  margin-top: 0;
`

const ContentSection = styled.section`
  padding: 1rem;
  margin: 1rem;
`

const Recents = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-rows: repeat(2, 1fr);

  @media (min-width: 32rem) {
    flex-direction: row;
    grid-template-columns: repeat(2, 1fr);
  }
`
