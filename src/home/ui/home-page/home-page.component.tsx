import { PageProps } from "gatsby"
import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { HomePageQuery } from "../../../../graphql-types"
import { assertDefined } from "../../../assertions"
import {
  ContentBlock,
  CoreLayout,
  ExternalLink,
  PageTitle,
  WithLayout,
} from "../../../backbone"
import { RecentPosts, toBlogPostPreview } from "../../../blog"
import { ProjectPreview, RecentProjects } from "../../../projects"
import { SEO } from "../../../seo"
import { RecentSection } from "../recent-section/recent-section.component"
import { FaGithubSquare } from "@react-icons/all-files/fa/FaGithubSquare"
import { FaTwitterSquare } from "@react-icons/all-files/fa/FaTwitterSquare"

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
        <Title>
          Radiating <Star>★</Star> Star
        </Title>
        <Recents>
          {([
            ["Recent Posts", <RecentPosts posts={posts} key="posts" />],
            [
              "Recent Projects",
              <RecentProjects projects={projects} key="projects" />,
            ],
          ] as const).map(([title, content]) => {
            return (
              <RecentSection key={title}>
                <RecentSectionHeading as={"h2"}>{title}</RecentSectionHeading>
                <RecentContent>{content}</RecentContent>
              </RecentSection>
            )
          })}
        </Recents>
        <SocialLinks>
          <h2>Keep in touch</h2>
          <SocialLink href="https://github.com/radiatingstar">
            <Icon as={FaGithubSquare} />
            github.com/radiatingstar
          </SocialLink>
          <SocialLink href="https://twitter.com/radiatingstar">
            <Icon as={FaTwitterSquare} />
            @radiatingstar
          </SocialLink>
        </SocialLinks>
      </ContentSection>
    </Layout>
  )
}

const RecentSectionHeading = styled.h1`
  margin: 0;
  color: var(--yellow-700);
`

const Title = styled(PageTitle)`
  margin: 0;
`

const Star = styled.span`
  color: white;
  opacity: 0.9;
  text-shadow: 0 0 10px rgb(255 255 255), 0 0 10px rgb(255 255 255);
`

const RecentContent = styled.div`
  margin-top: 2rem;
`

const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 2rem 6rem;
  gap: 6rem;
`

const Recents = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

const SocialLinks = styled(ContentBlock)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background: var(--yellow-700);
  color: var(--black-300);
  gap: 2rem;

  h2 {
    margin-top: 0;
    margin-bottom: 0;
  }

  @media (min-width: 48rem) {
    flex-direction: row;

    h2 {
      margin-right: auto;
    }
  }
`

const SocialLink = styled(ExternalLink)`
  display: flex;
  align-items: center;
  color: var(--red-300);
  font-weight: bold;
  text-decoration: none;
  &:hover,
  &:focus,
  &:active {
    color: var(--black-300);
  }
`

const Icon = styled.i`
  margin-right: 0.5rem;
  font-size: 200%;
`
