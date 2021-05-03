import React, { VoidFunctionComponent } from "react"
import styled from "styled-components"
import {
  ContentBlock,
  CoreLayout,
  ExternalLink,
  PageTitle,
  WithLayout,
} from "../../../backbone"
import { Badge } from "../badge/badge.component"
import { SEO } from "../../../seo"

const technologies = [
  {
    name: "Gatsby",
    url: "https://www.gatsbyjs.com/",
    linkName: "gatsbyjs.com",
    description: "JAM Stack...",
  },
  {
    name: "React",
    url: "https://reactjs.org/",
    linkName: "reactjs.org",
    description: "UI lib...",
  },
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
    linkName: "typescriptlang.org",
    description: "Language…",
  },
  {
    name: "Netlify",
    url: "https://www.netlify.com/",
    linkName: "netlify.com",
    description: "Hosting…",
  },
  {
    name: "React Testing Library",
    url: "https://testing-library.com/",
    linkName: "testing-library.com",
    description: "Tests…",
  },
  {
    name: "Jest",
    linkName: "jestjs.io",
    url: "https://jestjs.io/",
    description: "Tests…",
  },
  {
    name: "Styled Components",
    linkName: "styled-components.com",
    url: "https://styled-components.com/",
    description: "Styling…",
  },
]

export const TechPage: VoidFunctionComponent<WithLayout<void>> = ({
  layout: Layout = CoreLayout,
}) => {
  return (
    <Layout>
      <SEO title="Tech" />
      <Title>Technologies</Title>
      <TechList>
        <BadgesBlock>
          <Badge
            href="https://codeclimate.com/github/radiatingstar/radiatingstar.com/test_coverage"
            src="https://api.codeclimate.com/v1/badges/6580a1828697d56fe712/test_coverage"
            label="Code Climate Test Coverage"
          />
          <Badge
            href="https://codecov.io/gh/radiatingstar/radiatingstar.com"
            src="https://codecov.io/gh/radiatingstar/radiatingstar.com/branch/master/graph/badge.svg?token=yOUq7lvbnS"
            label="Codecov"
          />
          <Badge
            href="https://codeclimate.com/github/radiatingstar/radiatingstar.com/maintainability"
            src="https://api.codeclimate.com/v1/badges/6580a1828697d56fe712/maintainability"
            label="Code Climate Maintainability"
          />
          <Badge
            href="https://app.netlify.com/sites/radiatingstarcom/deploys"
            src="https://api.netlify.com/api/v1/badges/630d6ad6-236a-4ed5-a2a7-69bcc3bd6dba/deploy-status"
            label="Netlify Build Status"
          />
        </BadgesBlock>
        {technologies.map(({ name, url, linkName, description }) => {
          return (
            <ContentBlock key={name}>
              <BlockHeading as="h2">{name}</BlockHeading>
              <p>{description}</p>
              <ExternalLink href={url}>{linkName}</ExternalLink>
            </ContentBlock>
          )
        })}
        <ContentBlock>
          <p>
            Explore more technologies and tools used in this project by visiting
            the project&apos;s{" "}
            <ExternalLink href="https://github.com/radiatingstar/radiatingstar.com/blob/master/package.json">
              package.json
            </ExternalLink>{" "}
            file.
          </p>
        </ContentBlock>
      </TechList>
    </Layout>
  )
}

const Title = styled(PageTitle)`
  padding-bottom: 2rem;
  border-bottom: 4px solid currentColor;
  margin: 0 2rem 4rem;
  color: var(--yellow-700);
  font-size: 4rem;
  text-align: left;
`

const BadgesBlock = styled(ContentBlock)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const TechList = styled.div`
  display: grid;
  margin: 0 2rem 6rem;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`

const BlockHeading = styled.h1`
  margin-top: 0;
  color: var(--black-300);
  @media (prefers-color-scheme: dark) {
    color: white;
  }
`
