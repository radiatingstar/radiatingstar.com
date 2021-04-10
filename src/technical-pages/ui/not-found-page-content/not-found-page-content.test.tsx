import { render } from "@testing-library/react"
import React from "react"
import { NotFoundPageContent } from "./not-found-page-content.component"

const renderNotFountContent = () => {
  const { container } = render(<NotFoundPageContent />)
  return {
    get title() {
      return container.querySelector("h1")
    },
    get description() {
      return container.querySelector("p")
    },
    get link() {
      return container.querySelector("[href='/']")
    },
  }
}

describe("Content of the Not Found page", () => {
  describe("given a user lands on the 404 page", () => {
    describe("when he wants to know what happened", () => {
      it("shows the information about the content not being found", () => {
        const { title } = renderNotFountContent()
        expect(title).not.toBeEmptyDOMElement()
      })
      it("shows some cheesy explanation", () => {
        const { description } = renderNotFountContent()
        expect(description).not.toBeEmptyDOMElement()
      })
    })
    describe("when he wants to go back to safety", () => {
      it("allows him to navigate to the home page", () => {
        const { link } = renderNotFountContent()
        expect(link).toLinkTo("/")
      })
    })
  })
})
