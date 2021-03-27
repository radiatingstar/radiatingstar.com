import { render } from "@testing-library/react"
import React from "react"
import { CoreLayout } from "./core-layout.component"

describe("Core Layout component", () => {
  describe("when passed content", () => {
    it("should render it", () => {
      const { getByText } = render(
        <CoreLayout>
          <div>content</div>
        </CoreLayout>
      )
      expect(getByText("content")).toBeInTheDocument()
    })
  })
  describe("when passed a navigation", () => {
    it("should render it", () => {
      const { getByText } = render(<CoreLayout navigation={<div>nav</div>} />)
      expect(getByText("nav")).toBeInTheDocument()
    })
  })
})
