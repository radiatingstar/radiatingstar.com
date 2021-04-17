import { render, screen } from "@testing-library/react"
import React from "react"
import { checkAccessibility } from "../../../testing/checks/accessibility.check"
import { ensureSeoTitle } from "../../../testing/checks/seo-title.check"
import { TestLayout } from "../../../testing/components/test-layout.component"
import { BlogPostPage } from "./blog-post-page.component"

const postData = {
  post: {
    id: "Post ID",
    frontmatter: {
      title: "Post Title",
      date: "Post Date",
    },
    excerpt: "Post Excerpt",
    html: "Post Content",
  },
  site: {
    siteMetadata: {
      author: "Post Author",
    },
  },
}

const pageContext = {
  next: {
    frontmatter: {
      title: "next post title",
    },
    fields: {
      slug: "/next-slug",
    },
  },
  previous: {
    frontmatter: {
      title: "previous post title",
    },
    fields: {
      slug: "/previous-slug",
    },
  },
}

describe("Blog Post Page component", () => {
  checkAccessibility(
    <BlogPostPage data={postData} pageContext={{}} layout={TestLayout} />
  )
  describe("with post data", () => {
    beforeEach(() =>
      render(
        <BlogPostPage data={postData} pageContext={{}} layout={TestLayout} />
      )
    )
    ensureSeoTitle("Post Title")
    it("should set the page's title", () => {
      expect(screen.getByText("[title] Post Title")).toBeInTheDocument()
    })
    it("should set the page's description to excerpt", () => {
      expect(screen.getByText("[description] Post Excerpt")).toBeInTheDocument()
    })
    it("should set the post title", () => {
      expect(
        screen.getByRole("heading", { name: "Post Title", level: 1 })
      ).toBeInTheDocument()
    })
    it("should display the date", () => {
      expect(screen.getByText("Post Date")).toBeInTheDocument()
    })
    it("should display the author", () => {
      expect(screen.getByText("Post Author")).toBeInTheDocument()
    })
    it("should display the content", () => {
      expect(screen.getByText("Post Content")).toBeInTheDocument()
    })
  })
  describe("with page context", () => {
    beforeEach(() =>
      render(<BlogPostPage data={postData} pageContext={pageContext} />)
    )
    describe.each([
      ["next", "Next"],
      ["previous", "Previous"],
    ])("when " + "%s page info is provided", (direction) => {
      it(`should display the ${direction} link`, () => {
        expect(
          screen.getByRole("link", { name: `${direction} post title` })
        ).toLinkTo(`/blog/${direction}-slug`)
      })
    })
  })
})
