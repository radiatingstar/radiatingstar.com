import { PageProps } from "gatsby"
import React, {
  FunctionComponent,
  JSXElementConstructor,
  PropsWithChildren,
} from "react"
import styled from "styled-components"
import { BlogPostQuery, SitePageContext } from "../../../../graphql-types"
import { assertDefined } from "../../../assertions"
import { CoreLayout } from "../../../backbone"
import { SEO } from "../../../seo"
import { PostsNavigation } from "../posts-navigation/posts-navigation.component"

type Properties = Pick<
  PageProps<BlogPostQuery, SitePageContext>,
  "data" | "pageContext"
> & {
  layout?: JSXElementConstructor<PropsWithChildren<unknown>>
}

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
  padding: 1rem 1rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  text-align: center;
  color: var(--yellow-500);

  @media (min-width: 32rem) {
    padding: 4rem;
    gap: 4rem;
  }
`

const Title = styled.h1`
  margin: 0;
  padding: 0 2rem;
  font-size: 3rem;

  @media (min-width: 32rem) {
    font-size: 4rem;
  }
`

const Info = styled.aside``

const Content = styled.section`
  padding: 2rem;
  background: white;

  font-size: 1.2rem;
  line-height: 1.7;

  @media (min-width: 32rem) {
    padding: 4rem;
  }

  p:first-child {
    margin-top: 0;
  }

  a {
    text-decoration: none;
    color: var(--yellow-400);
  }
`
