import { StaticImage } from "gatsby-plugin-image"
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
    projectLink: "http://mateuszkocz.github.io/3l/",
    repoLink: "https://github.com/mateuszkocz/3l",
    description: `
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi commodi dolorum minus nobis. At dicta exercitationem
                  itaque perferendis quam, sapiente sequi soluta veniam.
                  Adipisci deserunt error itaque modi necessitatibus voluptas.
                `,
  },
  {
    name: "Mail Generator",
    projectLink: "https://mateuszkocz.github.io/mail-generator/",
    repoLink: "https://github.com/mateuszkocz/mail-generator",
    description: `
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi commodi dolorum minus nobis. At dicta exercitationem
                  itaque perferendis quam, sapiente sequi soluta veniam.
                  Adipisci deserunt error itaque modi necessitatibus voluptas.
                `,
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
          const image =
            project.name === "Lots of Love for Less" ? (
              <StaticImage
                src="../../assets/lots-of-love-for-less.png"
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
            ) : (
              <StaticImage
                src="../../assets/mail-generator.png"
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
            )
          return (
            <Project>
              <Image>{image}</Image>
              <ProjectContent>
                <ProjectTitle as="h2">{project.name}</ProjectTitle>
                <Description>{project.description}</Description>
                <Footer>
                  <ProjectExternalLink href={project.projectLink}>
                    Visit the project
                  </ProjectExternalLink>
                  <ProjectExternalLink href={project.repoLink}>
                    Repository
                  </ProjectExternalLink>
                </Footer>
              </ProjectContent>
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
  display: flex;
  overflow: hidden;
  height: 100%;
  flex-direction: column;
  background: white;
  border-radius: 4px;

  @media (min-width: 48rem) {
    flex-direction: row;

    & > * {
      width: 50%;
    }
  }
`

const Image = styled.div`
  height: 100%;
  line-height: 0;
`

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
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
