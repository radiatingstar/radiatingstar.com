import React, { ReactElement, VoidFunctionComponent } from "react"
import { List } from "../../../../../backbone"
import { BlogPostPreview } from "../../../../types/blog-post-preview"

interface Properties {
  posts: BlogPostPreview[]
  fallback: ReactElement
  renderPost: (post: BlogPostPreview) => ReactElement
}

export const PostsList: VoidFunctionComponent<Properties> = ({
  renderPost,
  posts,
  fallback,
}) => {
  return <List items={posts} renderItem={renderPost} fallback={fallback} />
}
