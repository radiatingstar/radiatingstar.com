import { render, screen } from "@testing-library/react"
import React from "react"
import { BlogPostPreview } from "../../types/blog-post-preview"
import { RecentPosts } from "./recent-posts.component"

describe("Recent Posts component", () => {
  describe("when provided with no posts", () => {
    it("should render info about there being no content", () => {
      render(<RecentPosts posts={[]} />)
      expect(screen.getByText(/no recent posts/i)).toBeInTheDocument()
    })
  })
  describe("when provided with posts", () => {
    const posts: BlogPostPreview[] = [
      { fields: { slug: "/slug-1" }, frontmatter: { title: "title 1" } },
      { fields: { slug: "/slug-2" }, frontmatter: { title: "title 2" } },
    ]
    beforeEach(() => {
      render(<RecentPosts posts={posts} />)
    })
    it("should display them all", () => {
      expect(screen.getAllByRole("link")).toHaveLength(posts.length)
    })
    it("should link all of them to blog", () => {
      const [first, second] = screen.getAllByRole("link")
      expect(first).toLinkTo("/blog/slug-1")
      expect(second).toLinkTo("/blog/slug-2")
    })
  })
})
