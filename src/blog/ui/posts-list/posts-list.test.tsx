import { render, screen } from "@testing-library/react"
import React from "react"
import { checkAccessibility } from "../../../testing/checks/accessibility.check"
import { BlogPostPreview } from "../../types/blog-post-preview"
import { PostsList } from "./posts-list.component"

const posts: BlogPostPreview[] = [
  {
    fields: { slug: "/slug-1" },
    frontmatter: { title: "title 1", tags: ["tag1"] },
    excerpt: "excerpt 1",
    timeToRead: 10
  },
  {
    fields: { slug: "/slug-2" },
    frontmatter: { title: "title 2", tags: ["tag2"] },
    excerpt: "excerpt 2",
    timeToRead: 20
  },
]

describe("Recent Posts component", () => {
  checkAccessibility(<PostsList posts={posts} />)
  describe("when provided with no posts", () => {
    it("should render info about there being no content", () => {
      render(<PostsList posts={[]} />)
      expect(screen.getByText(/no recent posts/i)).toBeInTheDocument()
    })
  })
  describe("when provided with posts", () => {
    beforeEach(() => {
      render(<PostsList posts={posts} />)
    })
    it("should display them all", () => {
      expect(screen.getAllByRole("link")).toHaveLength(posts.length)
    })
    it("should link all of them to blog", () => {
      const [first, second] = screen.getAllByRole("link")
      expect(first).toLinkTo("/blog/slug-1")
      expect(second).toLinkTo("/blog/slug-2")
    })
    it("should display tags", () => {
      expect(screen.getByText(/tag1/)).toBeInTheDocument()
      expect(screen.getByText(/tag2/)).toBeInTheDocument()
    })
    it("should display excerpts", () => {
      expect(screen.getByText(/excerpt 1/)).toBeInTheDocument()
      expect(screen.getByText(/excerpt 2/)).toBeInTheDocument()
    })
    it("should display time to read", () => {
      expect(screen.getByText(/10/)).toBeInTheDocument()
      expect(screen.getByText(/20/)).toBeInTheDocument()
    })
  })
})
