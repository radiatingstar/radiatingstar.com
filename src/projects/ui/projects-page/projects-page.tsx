import React, { VoidFunctionComponent } from "react"
import styled from "styled-components"
import {
  ContentBlock,
  CoreLayout,
  ExternalLink,
  List,
  ListComponentProperties,
  Tags,
  WithLayout,
} from "../../../backbone"
import { SEO } from "../../../seo"

interface ProjectInfo {
  name: string
  projectLink: string
  repoLink: string
  description: string
  tags: string[]
  type: string
}

const projectsList: ProjectInfo[] = [
  {
    name: "Lots of Love for Less",
    projectLink: "https://mateuszkocz.github.io/3l/",
    repoLink: "https://github.com/mateuszkocz/3l",
    tags: ["LESS", "CSS"],
    type: "Library",
    description:
      "3L was made for you to help you create awesome websites " +
      "and fill the Internet with excessive amount of Love! Get this set of mixins" +
      "for LESS CSS compiler with a twist.",
  },
  {
    name: "Mail Generator",
    projectLink: "https://mateuszkocz.github.io/mail-generator/",
    repoLink: "https://github.com/mateuszkocz/mail-generator",
    tags: ["Elm"],
    type: "Application",
    description:
      "Generate and keep track of email addresses you're using to " +
      "test your app with different users accounts. Add notes and easily manage " +
      "the generated emails to make your QA job easy. Works with Gmail, custom " +
      "domains and anything that can handle a + suffix.",
  },
]

type Properties = WithLayout<{ projects: ProjectInfo[] }>

export const ProjectsPage: VoidFunctionComponent<Properties> = ({
  projects = projectsList,
  layout: Layout = CoreLayout,
}) => {
  return (
    <Layout>
      <SEO title="Projects" />
      <PageTitle>Projects</PageTitle>
      <ProjectsList<ListComponentProperties<ProjectInfo>>
        renderItem={(project) => {
          return (
            <Project>
              <ProjectType type={project.type}>
                <span>{project.type}</span>
              </ProjectType>
              <ProjectTitle as="h2">{project.name}</ProjectTitle>
              <Description>{project.description}</Description>
              <ProjectTags names={project.tags} />
              <Footer>
                <ProjectExternalLink
                  href={project.projectLink}
                  label={`Visit ${project.name}`}
                >
                  Visit the project
                </ProjectExternalLink>
                <ProjectExternalLink
                  href={project.repoLink}
                  label={`Visit the ${project.name} repository`}
                >
                  GitHub
                </ProjectExternalLink>
              </Footer>
            </Project>
          )
        }}
        items={projects}
      />
    </Layout>
  )
}

const PageTitle = styled.h1`
  margin: 0 auto 4rem;
  color: var(--yellow-700);
  font-size: 4rem;
  text-align: center;
`

const ProjectsList = styled(List)`
  display: grid;
  align-items: stretch;
  margin: 0 2rem 6rem;
  gap: 4rem;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr;
  justify-items: stretch;
`

const Project = styled(ContentBlock)`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding-left: 5rem !important;
`

const ProjectType = styled.div<{ type: string }>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 3rem;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: ${({ type }) =>
    type === "Application" ? `var(--yellow-700)` : `var(--red-200)`};
  color: white;
  font-size: 1.2rem;
  font-weight: 900;
  letter-spacing: 0.15rem;
  text-transform: uppercase;

  span {
    transform: rotate(270deg);
  }
`

const Description = styled.p`
  margin: 0;
  line-height: 1.6;
`

const ProjectTags = styled(Tags)`
  margin: 2rem 0 2rem;
  gap: 0.3rem;
`

const Footer = styled.footer`
  margin-top: auto;
`

const ProjectExternalLink = styled(ExternalLink)`
  display: inline-block;
  padding: 1rem;
  background: var(--yellow-700);
  border-radius: 4px;
  color: white;
  text-decoration: none;

  & + & {
    margin-left: 1rem;
  }
`

const ProjectTitle = styled.h1`
  margin: 0 0 2rem;
  color: var(--black-300);

  @media (prefers-color-scheme: dark) {
    color: var(--yellow-700);
  }
`
