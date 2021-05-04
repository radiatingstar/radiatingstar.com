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
    description:
      "The framework behind this app. Generates the static pages and optimizes " +
      "data management making this page fast and fun to work with.",
  },
  {
    name: "React",
    url: "https://reactjs.org/",
    linkName: "reactjs.org",
    description:
      "UI library and the backbone of Gatsby. Pretty standard stuff.",
  },
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
    linkName: "typescriptlang.org",
    description:
      "The language of choice the app is using. Makes the data model " +
      "more explicit and enhances the IDE experience.",
  },
  {
    name: "Netlify",
    url: "https://www.netlify.com/",
    linkName: "netlify.com",
    description: "Hosting and deployment platform dedicated to JAM stack apps.",
  },
  {
    name: "React Testing Library",
    url: "https://testing-library.com/",
    linkName: "testing-library.com",
    description: "Simple and fun to work with testing library for React apps.",
  },
  {
    name: "Jest",
    linkName: "jestjs.io",
    url: "https://jestjs.io/",
    description: "Default test runner for React applications.",
  },
  {
    name: "Styled Components",
    linkName: "styled-components.com",
    url: "https://styled-components.com/",
    description: "One of the best tool for writing CSS-in-JS styles.",
  },
  {
    name: "axe",
    linkName: "deque.com/axe",
    url: "https://www.deque.com/axe/",
    description:
      "Accessibility validator used to make sure the page is" +
      "accessible (or—at least—not inaccessible).",
  },
  {
    name: "Lighthouse",
    linkName: "developers.google.com/lighthouse",
    url: "https://developers.google.com/web/tools/lighthouse",
    description:
      "Overall health validator for web apps. In this project it" +
      "is used as a Netlify plugin to ensure no issue will pass.",
  },
  {
    name: "ESLint",
    linkName: "eslint.org",
    url: "https://eslint.org/",
    description: "Code validator ensuring the code quality will be top notch.",
  },
  {
    name: "stylelint",
    linkName: "stylelint.io",
    url: "https://stylelint.io/",
    description: "Validator ensuring the good quality of CSS code.",
  },
]

export const TechPage: VoidFunctionComponent<WithLayout<unknown>> = ({
  layout: Layout = CoreLayout,
}) => {
  return (
    <Layout>
      <SEO
        title="Tech"
        description="Take a look at what tools were used to build this page."
      />
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
              <TechnologyLink href={url}>{linkName}</TechnologyLink>
            </ContentBlock>
          )
        })}
        <MetaBlock>
          <span>
            Explore more technologies and tools used in this project by visiting
            the project&apos;s{" "}
            <TechnologyLink href="https://github.com/radiatingstar/radiatingstar.com/blob/master/package.json">
              package.json
            </TechnologyLink>{" "}
            file.
          </span>
        </MetaBlock>
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

const MetaBlock = styled(ContentBlock)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const TechList = styled.div`
  display: grid;
  margin: 0 2rem 6rem;
  color: var(--black-300);
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

  @media (prefers-color-scheme: dark) {
    color: var(--gray-200);
  }
`

const BlockHeading = styled.h1`
  margin-top: 0;
  font-size: 1.2rem;
`

const TechnologyLink = styled(ExternalLink)`
  border-bottom: 1px solid currentColor;
  color: var(--red-100);
  text-decoration: none;

  &:hover {
    color: var(--yellow-700);
  }

  @media (prefers-color-scheme: dark) {
    color: var(--yellow-700);
    &:hover {
      color: var(--red-100);
    }
  }
`
