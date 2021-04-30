import { render, screen } from "@testing-library/react"
import React from "react"
import { checkAccessibility } from "../../../testing/checks/accessibility.check"
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
  checkAccessibility(<PostsList posts={posts} />)
  describe("when passed post", () => {
    describe.each([
      ["#1", 0 as const],
      ["#2", 1 as const],
    ])("%s", (_, index: number) => {
      beforeEach(() => render(<PostsList posts={posts} />))
      it("should display the title as a link", () => {
        const link = screen.getByRole("link", {
          name: posts[index].frontmatter.title,
        })
        expect(link).toLinkTo("/blog" + posts[index].fields.slug)
      })
      it("should display the excerpt", () => {
        expect(screen.getByText(posts[index].excerpt)).toBeInTheDocument()
      })
      it("should display the post link", () => {
        expect(
          screen.getByRole("link", { name: posts[index].frontmatter.title })
        ).toLinkTo("/blog" + posts[index].fields.slug)
      })
      it("should display the post link as a read more button", () => {
        const link = screen.getByRole("link", {
          name: `Read ${posts[index].frontmatter.title} post`,
        })
        expect(link).toLinkTo("/blog" + posts[index].fields.slug)
      })
    })
  })
})
