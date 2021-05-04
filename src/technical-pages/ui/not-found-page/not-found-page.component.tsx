import { Link } from "gatsby"
import React, { FunctionComponent } from "react"
import styled from "styled-components"
import {
  ContentBlock,
  CoreLayout,
  PageTitle,
  WithLayout,
} from "../../../backbone"
import { SEO } from "../../../seo"

export const NotFoundPage: FunctionComponent<WithLayout<unknown>> = ({
  layout: Layout = CoreLayout,
}) => (
  <Layout>
    <SEO title="404: Not Found" />
    <Content>
      <PageTitle>There are so many starts in the universe!</PageTitle>
      <NotFoundInfo attentionGrabbing>
        <p>No wonder we were not able to find this one. </p>
        <p>
          <PageLink to="/blog">Visit the blog</PageLink> or{" "}
          <PageLink to="/projects">take a look at the projects</PageLink>.
        </p>
      </NotFoundInfo>
    </Content>
  </Layout>
)

const Content = styled.section`
  margin: 0 2rem;

  ${PageTitle} {
    margin-top: 0;
  }
`

const NotFoundInfo = styled(ContentBlock)`
  padding-top: 4rem;
  padding-bottom: 4rem;

  p {
    margin-top: 0;
    margin-bottom: 0;
  }

  p + p {
    margin-top: 1rem;
  }
`

const PageLink = styled(Link)`
  border-bottom: 1px solid currentColor;
  color: var(--red-100);
  text-decoration: none;

  &:hover,
  &:active,
  &:focus {
    color: var(--yellow-700);
  }

  @media (prefers-color-scheme: dark) {
    color: var(--yellow-700);

    &:hover,
    &:active,
    &:focus {
      color: var(--red-100);
    }
  }
`
