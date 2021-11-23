import { PageProps } from "gatsby"
import React, { FunctionComponent, useRef } from "react"
import styled from "styled-components"
import { toBlogPostPreview } from "../.."
import { BlogPostQuery, SitePageContext } from "../../../../graphql-types"
import { assertDefined } from "../../../assertions"
import { CoreLayout, PageTitle, WithLayout } from "../../../backbone"
import { SEO } from "../../../seo"
import { PostInfo } from "../post-info/post-info.component"
import { PostsList } from "../posts-list/posts-list.component"
import { ProgressBar } from "../progress-bar/progress-bar.component"

type Properties = WithLayout<
  Pick<PageProps<BlogPostQuery, SitePageContext>, "data">
>
export const BlogPostPage: FunctionComponent<Properties> = ({
  data: { post, site, readMorePosts },
  layout: Layout = CoreLayout,
}) => {
  assertDefined(site)
  assertDefined(site.siteMetadata)
  assertDefined(post)
  assertDefined(post.frontmatter)
  assertDefined(post.frontmatter.title)
  assertDefined(post.frontmatter.date)
  assertDefined(post.frontmatter.formattedDate)
  assertDefined(post.timeToRead)
  assertDefined(post.excerpt)
  assertDefined(post.html)
  assertDefined(post.headings)
  const posts = readMorePosts.edges.map(({ node }) => toBlogPostPreview(node))
  const reference = useRef<HTMLDivElement>()

  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <Content>
        <Header>
          <Title>{post.frontmatter.title}</Title>
          <PostInfo
            tags={post.frontmatter.tags as string[]}
            timeToRead={post.timeToRead}
            date={post.frontmatter.date}
            formattedDate={post.frontmatter.formattedDate}
          />
        </Header>
        {post.headings.length > 0 && (
          <Sidebar>
            <>
              <SidebarHeading>Table of contents</SidebarHeading>
              <ProgressBar
                articleReference={reference}
                headings={post.headings}
              />
            </>
          </Sidebar>
        )}
        <Post ref={reference} dangerouslySetInnerHTML={{ __html: post.html }} />
      </Content>
      <ReadMore>
        <ReadMoreTitle>Read more</ReadMoreTitle>
        <PostsList posts={posts} withPreview={false} />
      </ReadMore>
    </Layout>
  )
}

const Header = styled.header`
  display: flex;
  flex-direction: column;
  grid-area: header;
  margin-block-start: 2rem;
  margin-block-end: 4rem;
`

const Title = styled(PageTitle)`
  margin: 0;
  background: var(--text-gradient);
  -webkit-background-clip: text;
  color: var(--attention-color);
  font-size: 2rem;
  -webkit-text-fill-color: transparent;

  @media (min-width: 48rem) {
    font-size: 3rem;
  }
`

const Content = styled.section`
  @media (min-width: 50rem) {
    display: grid;
    column-gap: 40px;
    grid-template-areas: "header ." "post sidebar";
    grid-template-columns: 4fr 1fr;
  }
`

const Post = styled.article`
  font-size: 1.2rem;
  grid-area: post;
  line-height: calc(1.6em + 0.2vw);

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
    padding-bottom: 3px;
    border-bottom: 2px solid;
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
  }

  h2 {
    scroll-margin-top: 2rem;

    &:first-of-type {
      margin-top: 0;
    }
  }

  a.anchor {
    border-bottom: none;
    text-decoration: none;
  }
`

const Sidebar = styled.aside`
  top: 1rem;
  grid-area: sidebar;
  margin-block-end: 2rem;
`

const SidebarHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
  margin-block-start: 0;
`

const ReadMore = styled.aside`
  margin-top: 4rem;
`

const ReadMoreTitle = styled.h2`
  margin-bottom: 2rem;
`
