import React, { VoidFunctionComponent } from "react"
import styled from "styled-components"
import {
  ContentBlock,
  CoreLayout,
  ExternalLink,
  List,
  ListComponentProperties,
  PageTitle,
  Tags,
  WithLayout,
} from "../../../backbone"
import { SEO } from "../../../seo"

interface ProjectInfo {
  name: string
  projectLink?: string
  repoLink: string
  description: string
  tags: string[]
  type: "Application" | "Library"
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
  {
    name: "Color Utilities",
    repoLink: "https://github.com/mateuszkocz/color-utilities",
    description:
      "Collection of useful methods for colors parsing, validation, " +
      "transformations and calculations. Exposed as a class, so can be used as a " +
      "stand-alone, or inside Angular apps.",
    tags: ["JavaScript", "TypeScript", "Angular"],
    type: "Library",
  },
  {
    name: "Angular Coordinates",
    repoLink: "https://github.com/mateuszkocz/angular-coordinates",
    description:
      "Angular library to parse and display geographical coordinates.",
    tags: ["TypeScript", "Angular"],
    type: "Library",
  },
  {
    name: "Angular Match Style to Background",
    repoLink:
      "https://github.com/mateuszkocz/angular-match-style-to-background",
    tags: ["TypeScript", "Angular"],
    type: "Library",
    description:
      "The directive makes sure the color of texts and other " +
      "elements inside the parent with dynamically changed background color " +
      "will stay readable and visible. The new style is chosen from optionally " +
      "provided styles declarations by calculating it's contrast ratio with the " +
      "current value of the background color.",
  },
]

type Properties = WithLayout<{ projects: ProjectInfo[] }>

export const ProjectsPage: VoidFunctionComponent<Properties> = ({
  projects = projectsList,
  layout: Layout = CoreLayout,
}) => {
  return (
    <Layout>
      <SEO
        title="Projects"
        description="Projects made by Radiating Star studio. Take a look at those applications and libraries."
      />
      <Title>Projects</Title>
      <ProjectsList<ListComponentProperties<ProjectInfo>>
        renderItem={(project) => {
          return (
            <Project>
              <ProjectType type={project.type}>{project.type}</ProjectType>
              <ProjectTitle as="h2">{project.name}</ProjectTitle>
              <Description>{project.description}</Description>
              <ProjectTags names={project.tags} />
              <Footer>
                {project.projectLink && (
                  <ProjectExternalLink
                    href={project.projectLink}
                    label={`Visit ${project.name}`}
                  >
                    Visit the project
                  </ProjectExternalLink>
                )}
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

const Title = styled(PageTitle)`
  margin-block: 2rem 4rem;
`

const ProjectsList = styled(List)`
  display: grid;
  align-items: stretch;
  margin-bottom: 6rem;
  gap: 3rem;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  justify-items: stretch;
`

const Project = styled(ContentBlock)`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding-block: 2rem;
  padding-inline-start: 5rem !important;
`

const ProjectType = styled.div<{ type: string }>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 5rem;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: var(--font-color);
  font-size: 1.2rem;
  font-weight: 900;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  writing-mode: vertical-rl;
`

const Description = styled.p`
  margin: 0;
  line-height: 1.6;
`

const ProjectTags = styled(Tags)`
  color: var(--attention-color);
  margin: 1rem 0 2rem;
  gap: 0.3rem;
`

const Footer = styled.footer`
  margin-top: auto;
`

const ProjectExternalLink = styled(ExternalLink)`
  padding-bottom: 3px;
  border-width: 0 0 2px;
  border-style: solid;
  background: var(--font-color);
  -webkit-background-clip: text;
  border-image-slice: 1;
  border-image-source: var(--underline-gradient);
  text-decoration: none;
  -webkit-text-fill-color: transparent;
  transition: border-bottom-width 300ms;

  &:hover {
    background: var(--text-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  & + & {
    margin-left: 1rem;
  }
`

const ProjectTitle = styled.h1`
  margin: 0 0 2rem;
  background: var(--text-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (prefers-color-scheme: dark) {
    color: var(--yellow-700);
  }
`
