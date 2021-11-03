import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { TimeToRead as TimeToReadRaw } from "./time-to-read/time-to-read.component"

interface Properties {
  tags: string[]
  timeToRead: number
  date: string
  formattedDate: string
}

export const PostInfo: FunctionComponent<Properties> = ({
  tags,
  timeToRead,
  date,
  formattedDate,
}) => {
  return (
    <Container>
      <TagsList>
        {tags.map((tag) => (
          <PostTag key={tag}>{tag}</PostTag>
        ))}
      </TagsList>
      <TimeToRead time={timeToRead} />
      <time dateTime={date}>{formattedDate}</time>
    </Container>
  )
}

const Container = styled.div`
  line-height: 1.5;
`

const PostTag = styled.span`
  color: var(--attention-color);
  &::before {
    content: "#";
  }
`

const TagsList = styled.div`
  display: inline-flex;
  gap: 0.3rem;
`

const TimeToRead = styled(TimeToReadRaw)`
  &::before,
  &::after {
    content: " ∙ ";
  }
`
