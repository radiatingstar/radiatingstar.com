import { Link } from "gatsby"
import React, { VoidFunctionComponent } from "react"
import styled from "styled-components"

const ProjectTitle = styled.h1`
  margin-bottom: 0;
`

interface Properties {
  title: string
  link: string
}

export const RecentProjectItem: VoidFunctionComponent<Properties> = ({
  link,
  title,
}) => {
  return (
    <Link to={link}>
      <ProjectTitle as={"h3"}>{title}</ProjectTitle>
    </Link>
  )
}
