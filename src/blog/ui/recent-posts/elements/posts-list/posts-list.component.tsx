import React, { ReactNode, VoidFunctionComponent } from "react"
import styled from "styled-components"
import { BlogPostPreview } from "../../../../types/blog-post-preview"

const List = styled.ul`
  // TODO: create a common reset. Remember about Safari's BS with non style.
  margin-bottom: 0;
  list-style: none;
  padding-left: 0;
`

interface Properties {
  posts: BlogPostPreview[]
  fallback: ReactNode
  renderPost: (post: BlogPostPreview) => ReactNode
}

export const PostsList: VoidFunctionComponent<Properties> = ({
  renderPost,
  posts,
  fallback,
}) => {
  const postsExist = posts.length > 0
  if (!postsExist) {
    return <>{fallback}</>
  }
  return (
    <List>
      {posts.map((post, index) => {
        return <li key={index}>{renderPost(post)}</li>
      })}
    </List>
  )
}
