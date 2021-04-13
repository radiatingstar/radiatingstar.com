import { BoundFunctions } from "@testing-library/dom/types/get-queries-for-element"
import { render, screen, within } from "@testing-library/react"
import React from "react"
import { TestLayout } from "../../../testing/components/test-layout.component"
import { ProjectsPage } from "./projects-page"

describe("Projects Page component", () => {
  beforeEach(() => render(<ProjectsPage layout={TestLayout} />))
  it("should set the page title", () => {
    expect(screen.getByText("[title] Projects")).toBeInTheDocument()
  })
  it("should display the main heading", () => {
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Projects"
    )
  })
  describe.each([
    [
      "Lots of Love for Less",
      "http://mateuszkocz.github.io/3l/",
      "https://github.com/mateuszkocz/3l",
      "../../assets/lots-of-love-for-less.png",
    ],
    [
      "Mail Generator",
      "https://mateuszkocz.github.io/mail-generator/",
      "https://github.com/mateuszkocz/mail-generator",
      "../../assets/mail-generator.png",
    ],
  ])("for %s project", (projectName, projectLink, repoLink, imageSource) => {
    let box: ReturnType<typeof within>
    beforeEach(
      () =>
        (box = within(
          screen.getByRole("heading", { name: projectName })
            ?.parentNode as HTMLElement
        ))
    )
    it("should display the title", () => {
      expect(
        screen.getByRole("heading", { name: projectName, level: 2 })
      ).toBeInTheDocument()
    })
    it("should display the link to the project", () => {
      // eslint-disable-next-line testing-library/prefer-screen-queries
      const link = box.getByRole("link", { name: /visit the project/i })
      expect(link).toLinkTo(projectLink)
    })
    it("should display the link to the project's repo", () => {
      // eslint-disable-next-line testing-library/prefer-screen-queries
      const link = box.getByRole("link", { name: /repository/i })
      expect(link).toLinkTo(repoLink)
    })
    it("should display the image", () => {
      // eslint-disable-next-line testing-library/prefer-screen-queries
      const image = box.getByRole("img")
      expect(image).toHaveAttribute("src", imageSource)
    })
  })
})
