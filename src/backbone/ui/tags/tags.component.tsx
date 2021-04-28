import React, { VoidFunctionComponent } from "react"
import styled from "styled-components"
import { Stylable } from "../../types/stylable.type"

interface Properties {
  names?: string[]
}

export const Tags: VoidFunctionComponent<Stylable<Properties>> = ({
  names = [],
  className,
}) => {
  return names?.length > 0 ? (
    <TagsContainer className={className}>
      {names?.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </TagsContainer>
  ) : // eslint-disable-next-line unicorn/no-null
  null
}

const TagsContainer = styled.div`
  display: flex;
  gap: 0.3rem;
`

const Tag = styled.span`
  display: inline-block;
  padding: 0.5rem;
  border: 1px solid var(--yellow-700);
  border-radius: 3px;
  text-transform: lowercase;
`
