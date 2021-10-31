import React, { VoidFunctionComponent } from "react"
import styled from "styled-components"
import { List } from "../../../backbone"
import { BLOG_PATH } from "../../constants"
import { BlogPostPreview } from "../../types/blog-post-preview"
import { PostItem } from "./elements/post-item/post-item.component"
import { ListComponentProperties } from "../../../backbone/ui/list/list.component"

interface Properties {
  posts: BlogPostPreview[]
  withPreview?: boolean
}

export const PostsList: VoidFunctionComponent<Properties> = ({
  posts,
  withPreview = true,
}) => {
  return (
    <Posts<ListComponentProperties<BlogPostPreview>>
      items={posts}
      fallback={<p>No recent posts available.</p>}
      renderItem={({ frontmatter, fields, excerpt, timeToRead }) => {
        return (
          <PostItem
            title={frontmatter.title}
            slug={BLOG_PATH + fields.slug}
            tags={frontmatter.tags}
            excerpt={excerpt}
            timeToRead={timeToRead}
            date={frontmatter.date}
            formattedDate={frontmatter.formattedDate}
            withPreview={withPreview}
          />
        )
      }}
    />
  )
}

const Posts = styled(List)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 60%;
`
