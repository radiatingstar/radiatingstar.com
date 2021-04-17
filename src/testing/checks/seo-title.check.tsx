import { render, screen } from "@testing-library/react"
import { ReactElement } from "react"

export const ensureSeoTitle = (
  componentOrTitle: ReactElement | string,
  title?: string
): void => {
  it("should set the page title", () => {
    if (typeof componentOrTitle === "string") {
      expect(
        screen.getByText(`[title] ${componentOrTitle}`)
      ).toBeInTheDocument()
    } else {
      render(componentOrTitle)
      expect(screen.getByText(`[title] ${title}`)).toBeInTheDocument()
    }
  })
}
