import { Link } from "gatsby"
import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { ItemLink } from "../../../../../backbone"
import { PostInfo } from "../../../post-info/post-info.component"

interface Properties {
  title: string
  slug: string
  excerpt: string
  tags: string[]
  timeToRead: number
  date: string
  formattedDate: string
  withPreview?: boolean
}

export const PostItem: FunctionComponent<Properties> = ({
  title,
  slug,
  excerpt,
  tags,
  timeToRead,
  date,
  formattedDate,
  withPreview = true,
}) => {
  return (
    <article>
      <PostItemLink as={Link} to={slug}>
        <PostTitle>
          <span>{title}</span>
        </PostTitle>
      </PostItemLink>
      {withPreview && <Excerpt>{excerpt}</Excerpt>}
      <PostInfo
        tags={tags}
        timeToRead={timeToRead}
        date={date}
        formattedDate={formattedDate}
      />
    </article>
  )
}

const PostItemLink = styled(ItemLink)`
  /* Safari needs a span to make the gradient work properly. */

  span {
    background: var(--font-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &:hover {
      background: var(--text-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`

const PostTitle = styled.h2`
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight: bold;
  margin-block: 0;
`

const Excerpt = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
`
