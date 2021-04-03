import React, { ReactNode, VoidFunctionComponent } from "react"
import { BlogPostPreview } from "../../../../types/blog-post-preview"

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
    <ul>
      {posts.map((post, index) => {
        return <li key={index}>{renderPost(post)}</li>
      })}
    </ul>
  )
}
