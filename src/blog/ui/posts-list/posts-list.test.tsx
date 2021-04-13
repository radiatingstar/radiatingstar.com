import { render, screen } from "@testing-library/react"
import { axe } from "jest-axe"
import React from "react"
import { PostsList } from "./posts-list.component"

const posts = [
  {
    excerpt: "Rover is rolling.",
    fields: {
      slug: "/curiosity",
    },
    frontmatter: {
      date: "2020",
      title: "Curiosity",
    },
  },
  {
    excerpt: "Straight into Saturn.",
    fields: {
      slug: "/cassini",
    },
    frontmatter: {
      date: "2018",
      title: "Cassini",
    },
  },
]

describe("Posts List component", () => {
  describe("accessibility", () => {
    it("should be top notch", async () => {
      const { container } = render(<PostsList posts={posts} />)
      const result = await axe(container)
      expect(result).toHaveNoViolations()
    })
  })
  describe("when passed post", () => {
    describe.each([
      ["#1", 0 as const],
      ["#2", 1 as const],
    ])("%s", (_, index: number) => {
      beforeEach(() => render(<PostsList posts={posts} />))
      it("should display the excerpt", () => {
        expect(screen.getByText(posts[index].excerpt)).toBeInTheDocument()
      })
      it("should display date", () => {
        expect(
          screen.getByText(posts[index].frontmatter.date)
        ).toBeInTheDocument()
      })
      it("should display the post link", () => {
        expect(
          screen.getByRole("link", { name: posts[index].frontmatter.title })
        ).toLinkTo("/blog" + posts[index].fields.slug)
      })
      it("should display the post link as a read more button", () => {
        expect(
          screen.getAllByRole("link", { name: /read more/i })[index]
        ).toLinkTo("/blog" + posts[index].fields.slug)
      })
    })
  })
})
