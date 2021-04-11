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

const Item = styled.article`
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--yellow-500);
  height: 100%;
  display: flex;
  flex-direction: column;
`

const ListContainer = styled(List)`
  margin-bottom: 4rem;
  padding: 0 2rem;
  display: grid;
  gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: stretch;
`

const PostHeading = styled.h1`
  margin-top: 0;
  font-size: 2rem;
  line-height: 1.5;
`

const PostLink = styled(Link)`
  text-decoration: none;
  color: var(--yellow-500);
`

const Excerpt = styled.p`
  margin-bottom: 2rem;
  line-height: 1.5;
  font-size: 1.5rem;
`

const SecondaryPostLink = styled(Link)`
  margin-top: auto;
  padding: 1rem;
  display: block;
  background: var(--yellow-500);
  border-radius: 4px;
  color: var(--black-300);
  font-size: 1.2rem;
  text-decoration: none;
  text-align: center;
`
