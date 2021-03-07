import { render, waitFor } from "@testing-library/react"
import React from "react"
import { NotFoundPage } from "./not-found-page.component"

// Avoid SEO's component shenanigans.
jest.mock("../../../seo", () => ({
  SEO: ({ title }: { title: string }) => <div data-testid="seo">{title}</div>,
}))

const renderNotFoundPate = () => {
  const result = render(<NotFoundPage />)
  return {
    get title() {
      return result.getByTestId("seo")
    },
  }
}

describe("Not Found page", () => {
  describe("given a user lands on the Not Found Page", () => {
    describe("when he looks at the browser's title bar", () => {
      it("shows him the 404 title", async () => {
        const { title } = renderNotFoundPate()
        expect(title).toHaveTextContent(/404/)
      })
    })
  })
})
