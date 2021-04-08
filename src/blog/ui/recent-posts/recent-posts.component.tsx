import React, { VoidFunctionComponent } from "react"
import { BLOG_PATH } from "../../constants"
import { BlogPostPreview } from "../../types/blog-post-preview"
import { PostsList } from "./elements/posts-list/posts-list.component"
import { RecentPostItem } from "./elements/recent-post-item/recent-post-item.component"

interface Properties {
  posts: BlogPostPreview[]
}

export const RecentPosts: VoidFunctionComponent<Properties> = ({ posts }) => {
  return (
    <PostsList
      posts={posts}
      fallback={<p>No recent posts available.</p>}
      renderPost={({ frontmatter, fields }) => {
        return (
          <RecentPostItem
            title={frontmatter.title}
            slug={BLOG_PATH + fields.slug}
          />
        )
      }}
    />
  )
}
