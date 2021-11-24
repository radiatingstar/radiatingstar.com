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
    <div>
      <PostItemLink as={Link} to={slug}>
        <PostTitle>{title}</PostTitle>
      </PostItemLink>
      {withPreview && <p>{excerpt}</p>}
      <PostInfo
        tags={tags}
        timeToRead={timeToRead}
        date={date}
        formattedDate={formattedDate}
      />
    </div>
  )
}

const PostItemLink = styled(ItemLink)`
  color: var(--font-color);

  &:hover {
    color: var(--attention-color);
  }
`

const PostTitle = styled.h2`
  margin-block-start: 0;
  font-size: 1rem;
  font-weight: bold;
`