import { render, screen } from "@testing-library/react"
import React from "react"
import { checkAccessibility } from "../../../testing/checks/accessibility.check"
import { Tags } from "./tags.component"

describe("Tags component", () => {
  checkAccessibility(<Tags names={["a", "b"]} />)
  // eslint-disable-next-line unicorn/no-null
  describe.each([[] as string[], undefined])(
    "when no tags were passed",
    (tags) => {
      it("should render nothing", () => {
        const { container } = render(<Tags names={tags} />)
        expect(container).toBeEmptyDOMElement()
      })
    }
  )
  describe("when tags are passed", () => {
    beforeEach(() => render(<Tags names={["tag 1", "tag 2"]} />))
    it("should render all of them", () => {
      expect(screen.getByText("tag 1")).toBeInTheDocument()
      expect(screen.getByText("tag 2")).toBeInTheDocument()
    })
  })
})
