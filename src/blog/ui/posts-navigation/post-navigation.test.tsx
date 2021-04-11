import React from "react"
import { render, screen } from "@testing-library/react"
import { PostsNavigation } from "./posts-navigation.component"

const next = "next" as const
const previous = "prev" as const

const createRelation = (kind: typeof next | typeof previous) => ({
  frontmatter: {
    title: `${kind} title`,
  },
  fields: {
    slug: `/slug-${kind}`,
  },
})

describe("Post Navigation component", () => {
  describe.each([
    [next, next],
    [previous, "previous" as const],
  ])("when %s relation is passed", (kind, fullName) => {
    beforeEach(() =>
      render(<PostsNavigation {...{ [fullName]: createRelation(kind) }} />)
    )
    it("should render the link", () => {
      expect(screen.getByRole("link")).toBeInTheDocument()
    })
    it("should link to %s relation", () => {
      expect(screen.getByRole("link")).toLinkTo(`/blog/slug-${kind}`)
    })
    it("should have the proper relation", () => {
      expect(screen.getByRole("link")).toHaveAttribute("rel", kind)
    })
  })
  describe.each([next, previous])("when % is not passed", () => {
    beforeEach(() => render(<PostsNavigation />))
    it("should not be rendered", () => {
      expect(screen.queryByRole("link")).not.toBeInTheDocument()
    })
  })
  describe.each([
    [next, next],
    [previous, "previous" as const],
  ])("when % is missing", (kind, fullName) => {
    describe.each(["fields" as const, "frontmatter" as const])(
      "%s",
      (field) => {
        beforeEach(() => {
          const value = createRelation(kind)
          delete value[field]
          return render(<PostsNavigation {...{ [fullName]: value }} />)
        })
        it("should not be rendered", () => {
          expect(screen.queryByRole("link")).not.toBeInTheDocument()
        })
      }
    )
  })
})
