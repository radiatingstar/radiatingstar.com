import { render, screen } from "@testing-library/react"
import { ReactElement } from "react"

const createTestCase = (type: "title" | "description") => (
  componentOrValue: ReactElement | string,
  value?: string
): void => {
  it("should set the page title", () => {
    if (typeof componentOrValue === "string") {
      expect(
        screen.getByText(`[${type}] ${componentOrValue}`)
      ).toBeInTheDocument()
    } else {
      render(componentOrValue)
      expect(screen.getByText(`[${type}] ${value}`)).toBeInTheDocument()
    }
  })
}

export const ensureSeoTitle = createTestCase("title")
export const ensureSeoDescription = createTestCase("description")
