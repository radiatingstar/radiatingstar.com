import React, {
  JSXElementConstructor,
  PropsWithChildren,
  VoidFunctionComponent,
} from "react"
import styled from "styled-components"
import {
  CoreLayout,
  ExternalLink,
  List,
  ListComponentProperties,
} from "../../../backbone"
import { SEO } from "../../../seo"

interface ProjectInfo {
  name: string
  projectLink: string
  repoLink: string
  description: string
}

const projectsList: ProjectInfo[] = [
  {
    name: "Lots of Love for Less",
    projectLink: "https://mateuszkocz.github.io/3l/",
    repoLink: "https://github.com/mateuszkocz/3l",
    description:
      "3L was made for you to help you create awesome websites " +
      "and fill the Internet with excessive amount of Love! Get this set of mixins" +
      "for LESS CSS compiler with a twist.",
  },
  {
    name: "Mail Generator",
    projectLink: "https://mateuszkocz.github.io/mail-generator/",
    repoLink: "https://github.com/mateuszkocz/mail-generator",
    description:
      "Generate and keep track of email addresses you're using to " +
      "test your app with different users accounts. Add notes and easily manage " +
      "the generated emails to make your QA job easy. Works with Gmail, custom " +
      "domains and anything that can handle a + suffix.",
  },
]

type Properties = { projects: ProjectInfo[] } & {
  layout?: JSXElementConstructor<PropsWithChildren<unknown>>
}

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
              <ProjectTitle as="h2">{project.name}</ProjectTitle>
              <Description>{project.description}</Description>
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
                  Repository
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
  color: var(--yellow-500);
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

const Project = styled.section`
  position: relative;
  display: flex;
  overflow: hidden;
  height: 100%;
  flex-direction: column;
  padding: 2rem;
  background: white;
  border-radius: 4px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  &:after {
    position: absolute;
    right: -3rem;
    bottom: -3rem;
    color: var(--gray-100);
    content: "★";
    font-size: 13rem;
  }
`

const Description = styled.p`
  margin: 0 0 2rem;
  line-height: 1.6;
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
`
