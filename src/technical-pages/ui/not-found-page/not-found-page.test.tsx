import { render, screen } from "@testing-library/react"
import React from "react"
import { TestLayout } from "../../../testing/components/test-layout.component"
import { NotFoundPage } from "./not-found-page.component"

describe("Not Found page", () => {
  beforeEach(() => render(<NotFoundPage layout={TestLayout} />))
  describe("given a user lands on the Not Found Page", () => {
    describe("when he looks at the browser's title bar", () => {
      it("shows him the 404 title", async () => {
        expect(screen.getByText("[title] 404: Not Found")).toBeInTheDocument()
      })
    })
    describe("when he wants to know what happened", () => {
      it("should show the information about the content not being found", () => {
        expect(screen.getByRole("heading")).not.toBeEmptyDOMElement()
      })
      it("shows some cheesy explanation", () => {
        expect(screen.getByText(/not able to find/)).toBeInTheDocument()
      })
    })
    describe("when he wants to go back to safety", () => {
      it("should allow him to navigate to the blog page", () => {
        expect(screen.getByRole("link", { name: /blog/i })).toLinkTo("/blog")
      })
      it("should allow him to navigate to the projects page", () => {
        expect(screen.getByRole("link", { name: /projects/i })).toLinkTo(
          "/projects"
        )
      })
    })
  })
})
