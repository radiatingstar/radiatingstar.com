import { PageProps } from "gatsby"
import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { BlogPostQuery, SitePageContext } from "../../../../graphql-types"
import { assertDefined } from "../../../assertions"
import { CoreLayout } from "../../../backbone"
import { WithLayout } from "../../../backbone/types/with-layout.type"
import { SEO } from "../../../seo"
import { PostsNavigation } from "../posts-navigation/posts-navigation.component"

type Properties = WithLayout<
  Pick<PageProps<BlogPostQuery, SitePageContext>, "data" | "pageContext">
>
export const BlogPostPage: FunctionComponent<Properties> = ({
  data: { post, site },
  pageContext,
  layout: Layout = CoreLayout,
}) => {
  assertDefined(site)
  assertDefined(site.siteMetadata)
  assertDefined(post)
  assertDefined(post.frontmatter)
  assertDefined(post.frontmatter.title)
  assertDefined(post.excerpt)
  assertDefined(post.html)
  const author = site.siteMetadata.author
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <Header>
        <Title>{post.frontmatter.title}</Title>
        <Info>
          <span>{post.frontmatter.date}</span>, by <span>{author}</span>
        </Info>
      </Header>
      <Content dangerouslySetInnerHTML={{ __html: post.html }} />
      <footer>
        <PostsNavigation {...pageContext} />
      </footer>
    </Layout>
  )
}

const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 2rem;

  color: var(--yellow-500);

  gap: 2rem;
  text-align: center;

  @media (min-width: 32rem) {
    padding: 4rem;
    gap: 4rem;
  }
`

const Title = styled.h1`
  padding: 0 2rem;
  margin: 0;
  font-size: 2rem;

  @media (min-width: 32rem) {
    font-size: 4rem;
  }
`

const Info = styled.div``

const Content = styled.section`
  padding: 2rem;

  background: white;

  font-size: 1.2rem;
  line-height: 1.8;

  @media (min-width: 32rem) {
    padding: 4rem;
  }

  p {
    margin: 2rem 0;
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: var(--yellow-400);
    text-decoration: none;
  }
`
