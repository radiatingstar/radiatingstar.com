import { PageProps } from "gatsby"
import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { toBlogPostPreview } from "../.."
import { BlogPostQuery, SitePageContext } from "../../../../graphql-types"
import { assertDefined } from "../../../assertions"
import { CoreLayout, PageTitle, WithLayout } from "../../../backbone"
import { SEO } from "../../../seo"
import { PostInfo } from "../post-info/post-info.component"
import { PostsList } from "../posts-list/posts-list.component"
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
              <nav>
                <ToCList>
                  {post.headings.map(({ value }) => (
                    <li key={value}>
                      <ToCLink
                        href={"#" + value.replace(/\s+/g, "-").toLowerCase()}
                      >
                        {value}
                      </ToCLink>
                    </li>
                  ))}
                </ToCList>
              </nav>
            </>
          </Sidebar>
        )}
        <Post dangerouslySetInnerHTML={{ __html: post.html }} />
      </Content>
      <ReadMore>
        <ReadMoreTitle>Read more</ReadMoreTitle>
        <PostsList posts={posts} withPreview={false} />
      </ReadMore>
    </Layout>
  )
}

const Header = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: column;
  margin-block: 4rem;
`

const Title = styled(PageTitle)`
  font-size: 2rem;
  margin: 0;
  color: var(--attention-color);

  @media (min-width: 48rem) {
    font-size: 3rem;
  }
`

const Content = styled.section`
  @media (min-width: 50rem) {
    display: grid;
    grid-template-areas: "header ." "post sidebar";
    grid-template-columns: 4fr 1fr;
    column-gap: 40px;
  }
`

const Post = styled.article`
  grid-area: post;
  line-height: calc(1.5em + 0.2vw);

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

  h2 {
    scroll-margin-top: 2rem;

    &:first-of-type {
      margin-top: 0;
    }
  }

  a.anchor {
    text-decoration: none;
    border-bottom: none;
  }
`

const Sidebar = styled.aside`
  grid-area: sidebar;
  position: sticky;
  top: 1rem;
`

const SidebarHeading = styled.h2`
  margin-block-start: 0;
  font-weight: normal;
  font-size: 1.5rem;
`

const ToCList = styled.ol`
  margin-block-start: 0;
  margin-block-end: 2rem;
  padding-left: 0;
  line-height: 1.5;
  list-style-position: inside;

  li {
    margin-block: 0.5rem;
  }
`

const ToCLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: var(--attention-color);
  }
`

const ReadMore = styled.aside`
  margin-top: 4rem;
`

const ReadMoreTitle = styled.h2`
  margin-bottom: 2rem;
`
