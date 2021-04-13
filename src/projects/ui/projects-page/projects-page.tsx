import React, {
  JSXElementConstructor,
  PropsWithChildren,
  VoidFunctionComponent,
} from "react"
import styled from "styled-components"
import { CoreLayout, ExternalLink, List } from "../../../backbone"
import { SEO } from "../../../seo"
import { StaticImage } from "gatsby-plugin-image"

const projects = [
  {
    name: "Lots of Love for Less",
    projectLink: "http://mateuszkocz.github.io/3l/",
    repoLink: "https://github.com/mateuszkocz/3l",
    image: <StaticImage src="../../assets/lots-of-love-for-less.png" alt="" />,
  },
  {
    name: "Mail Generator",
    projectLink: "https://mateuszkocz.github.io/mail-generator/",
    repoLink: "https://github.com/mateuszkocz/mail-generator",
    image: <StaticImage src="../../assets/mail-generator.png" alt="" />,
  },
]

type Properties = {
  layout?: JSXElementConstructor<PropsWithChildren<unknown>>
}

export const ProjectsPage: VoidFunctionComponent<Properties> = ({
  layout: Layout = CoreLayout,
}) => {
  return (
    <Layout>
      <SEO title="Projects" />
      <h1>Projects</h1>
      <List
        renderItem={(project) => {
          return (
            <Project>
              {project.image}
              <ProjectTitle as="h2">{project.name}</ProjectTitle>
              <ProjectExternalLink href={project.projectLink}>
                Visit the project
              </ProjectExternalLink>
              <ProjectExternalLink href={project.repoLink}>
                Repository
              </ProjectExternalLink>
            </Project>
          )
        }}
        items={projects}
      />
    </Layout>
  )
}

const Project = styled.section`
  padding: 2rem;
  margin-bottom: 2rem;
  background: white;
  border-radius: 4px;
`

const ProjectExternalLink = styled(ExternalLink)`
  color: var(--yellow-400);
  text-decoration: none;
`

const ProjectTitle = styled.h1`
  margin-top: 0;
  color: var(--black-300);
`
