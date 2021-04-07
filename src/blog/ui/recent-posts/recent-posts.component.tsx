import React, { VoidFunctionComponent } from "react"
import styled from "styled-components"
import { BLOG_PATH } from "../../constants"
import { BlogPostPreview } from "../../types/blog-post-preview"
import { PostsList } from "./elements/posts-list/posts-list.component"
import { RecentPostItem } from "./elements/recent-post-item/recent-post-item.component"

const PostsSection = styled.section`
  padding: 3rem;
  background: white;
`

const PostsSectionHeading = styled.h1`
  margin-top: 0;
`

interface Properties {
  posts: BlogPostPreview[]
}

export const RecentPosts: VoidFunctionComponent<Properties> = ({ posts }) => {
  return (
    <PostsSection>
      <PostsSectionHeading as={"h2"}>Recent posts</PostsSectionHeading>
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
    </PostsSection>
  )
}
