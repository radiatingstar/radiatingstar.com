import { Link } from "gatsby"
import React, { VoidFunctionComponent } from "react"
import styled from "styled-components"
import { List, ListComponentProperties } from "../../../backbone"
import { BlogPostInfo } from "../../types/blog-post-info"

interface Properties {
  posts: BlogPostInfo[]
}

export const PostsList: VoidFunctionComponent<Properties> = ({ posts }) => {
  return (
    <ListContainer<ListComponentProperties<BlogPostInfo>>
      items={posts}
      renderItem={({ frontmatter, fields, excerpt }) => {
        const link = `/blog${fields.slug}`
        return (
          <Item>
            <PostHeading as="h2">
              <PostLink to={link}>{frontmatter.title}</PostLink>
            </PostHeading>
            <Excerpt dangerouslySetInnerHTML={{ __html: excerpt }} />
            <SecondaryPostLink
              to={link}
              aria-label={`Read ${frontmatter.title} post`}
            >
              Read More
            </SecondaryPostLink>
          </Item>
        )
      }}
    />
  )
}

const ListContainer = styled(List)`
  display: grid;
  /* 
    TODO: Research why the List's styles have priority over
      this styles (that's why !important is required). 
   */
  padding: 0 4rem !important;
  margin-bottom: 4rem;
  gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  justify-items: stretch;
`

const Item = styled.article`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid var(--yellow-500);
  background: var(--red-100);
  border-radius: 4px;
`
const PostHeading = styled.h1`
  margin: 0;
  color: var(--yellow-500);
  font-size: 2rem;
  line-height: 1.5;

  &:hover,
  &:active {
    color: var(--yellow-700);
  }
`

const PostLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
`

const Excerpt = styled.p`
  margin-bottom: 2rem;
  color: var(--black-300);
  font-size: 1rem;
  line-height: 1.5;
`

const SecondaryPostLink = styled(Link)`
  display: block;
  padding: 1rem;
  margin-top: auto;

  background: var(--yellow-500);
  border-radius: 4px;

  color: var(--black-300);
  font-size: 1.2rem;
  text-align: center;
  text-decoration: none;

  &:hover,
  &:active {
    background: var(--red-200);
    color: white;
  }
`
