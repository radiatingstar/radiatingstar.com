import React, { VoidFunctionComponent } from "react"
import { List } from "../../../backbone"
import { BLOG_PATH } from "../../constants"
import { BlogPostPreview } from "../../types/blog-post-preview"
import { RecentPostItem } from "./elements/recent-post-item/recent-post-item.component"

interface Properties {
  posts: BlogPostPreview[]
}

export const RecentPosts: VoidFunctionComponent<Properties> = ({ posts }) => {
  return (
    <List
      items={posts}
      fallback={<p>No recent posts available.</p>}
      renderItem={({ frontmatter, fields }, { last }) => {
        return (
          <RecentPostItem
            title={frontmatter.title}
            slug={BLOG_PATH + fields.slug}
            last={last}
          />
        )
      }}
    />
  )
}
