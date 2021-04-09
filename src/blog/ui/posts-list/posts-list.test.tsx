import { render, screen } from "@testing-library/react"
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
  describe("when passed post", () => {
    describe.each([
      ["#1", posts[0]],
      ["#2", posts[1]],
    ])("%s", (_, post) => {
      beforeEach(() => render(<PostsList posts={posts} />))
      it("should display the excerpt", () => {
        expect(screen.getByText(post.excerpt)).toBeInTheDocument()
      })
      it("should display date", () => {
        expect(screen.getByText(post.frontmatter.date)).toBeInTheDocument()
      })
      it("should display the post link", () => {
        expect(
          screen.getByRole("link", { name: post.frontmatter.title })
        ).toHaveAttribute("href", "/blog" + post.fields.slug)
      })
    })
  })
})
