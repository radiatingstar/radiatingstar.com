import { PageProps } from "gatsby"
import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { BlogPostQuery, SitePageContext } from "../../../../graphql-types"
import { assertDefined } from "../../../assertions"
import {
  ContentBlock,
  CoreLayout,
  ExternalLink,
  PageTitle,
  Tags,
  WithLayout,
} from "../../../backbone"
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
  const suggestionLink =
    `https://github.com/radiatingstar/radiatingstar.com` +
    `/blob/master/content/blog${pageContext.slug}index.md`
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <Header>
        <Title>{post.frontmatter.title}</Title>
        <PostTags names={post.frontmatter.tags as string[] | undefined} />
      </Header>
      <Content>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Info>
          <InfoLink href={suggestionLink}>Suggest change</InfoLink>
          <span>{post.frontmatter.date}</span>
          <span>
            written by{" "}
            <InfoLink href="https://twitter.com/mateuszkocz">{author}</InfoLink>
          </span>
        </Info>
      </Content>
      <aside>
        <PostsNavigation {...pageContext} />
      </aside>
    </Layout>
  )
}

const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 2rem;
  color: var(--yellow-700);
  gap: 2rem;

  @media (min-width: 32rem) {
    padding: 4rem;
    gap: 4rem;
  }
`

const Title = styled(PageTitle)`
  margin: 0;
`

const PostTags = styled(Tags)`
  justify-content: flex-start;
`

const Info = styled.footer`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  border-top: 1px solid currentColor;
  margin-top: 2rem;
  color: var(--gray-200);
  font-size: 80%;
  text-align: right;
`

const Content = styled(ContentBlock)`
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
  }
`

const InfoLink = styled(ExternalLink)`
  /* FIXME: For some reason, setting color here won't overwrite the parent
      styles, hence !important. */
  color: var(--gray-200) !important;
  &:hover,
  &:active,
  &:focus {
    color: var(--yellow-700) !important;
  }
`
