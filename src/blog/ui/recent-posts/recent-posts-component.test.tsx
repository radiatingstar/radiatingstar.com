import { render, RenderResult } from "@testing-library/react"
import React from "react"
import { BlogPostPreview } from "../../types/blog-post-preview"
import { RecentPosts } from "./recent-posts.component"

describe("Recent Posts component", () => {
  describe("when provided with no posts", () => {
    it("should render info about there being no content", () => {
      const { getByText } = render(<RecentPosts posts={[]} />)
      expect(getByText(/no recent posts/i)).toBeInTheDocument()
    })
  })
  describe("when provided with posts", () => {
    const posts: BlogPostPreview[] = [
      { fields: { slug: "/slug-1" }, frontmatter: { title: "title 1" } },
      { fields: { slug: "/slug-2" }, frontmatter: { title: "title 2" } },
    ]
    let result: RenderResult
    beforeEach(() => {
      result = render(<RecentPosts posts={posts} />)
    })
    it("should display them all", () => {
      expect(result.getAllByRole("link")).toHaveLength(posts.length)
    })
    it("should link all of them to blog", () => {
      const [first, second] = result.getAllByRole("link")
      expect(first).toHaveAttribute("href", "/blog/slug-1")
      expect(second).toHaveAttribute("href", "/blog/slug-2")
    })
  })
})
