import { render, screen } from "@testing-library/react"
import React from "react"
import { NotFoundPage } from "./not-found-page.component"

describe("Not Found page", () => {
  describe("given a user lands on the Not Found Page", () => {
    describe("when he looks at the browser's title bar", () => {
      it("shows him the 404 title", async () => {
        render(<NotFoundPage />)
        expect(screen.getByText("[title] 404: Not Found")).toBeInTheDocument()
      })
    })
  })
})
