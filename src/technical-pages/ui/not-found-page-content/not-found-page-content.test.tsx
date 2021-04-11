import { render, screen } from "@testing-library/react"
import React from "react"
import { NotFoundPageContent } from "./not-found-page-content.component"

describe("Content of the Not Found page", () => {
  beforeEach(() => render(<NotFoundPageContent />))
  describe("given a user lands on the 404 page", () => {
    describe("when he wants to know what happened", () => {
      it("should show the information about the content not being found", () => {
        expect(screen.getByRole("heading")).not.toBeEmptyDOMElement()
      })
      it("shows some cheesy explanation", () => {
        expect(screen.getByText(/not able to find/)).toBeInTheDocument()
      })
    })
    describe("when he wants to go back to safety", () => {
      it("should allow him to navigate to the home page", () => {
        expect(screen.getByRole("link")).toLinkTo("/")
      })
    })
  })
})
