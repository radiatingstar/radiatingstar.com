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
            <small>{frontmatter.date}</small>
            <Excerpt dangerouslySetInnerHTML={{ __html: excerpt }} />
            <SecondaryPostLink to={link}>Read More</SecondaryPostLink>
          </Item>
        )
      }}
    />
  )
}

const ListContainer = styled(List)`
  display: grid;
  padding: 0 2rem;
  margin-bottom: 4rem;
  gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: stretch;
`

const Item = styled.article`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--yellow-500);
`
const PostHeading = styled.h1`
  margin-top: 0;
  font-size: 2rem;
  line-height: 1.5;
`

const PostLink = styled(Link)`
  color: var(--yellow-500);
  text-decoration: none;
`

const Excerpt = styled.p`
  margin-bottom: 2rem;
  font-size: 1.5rem;
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
`
