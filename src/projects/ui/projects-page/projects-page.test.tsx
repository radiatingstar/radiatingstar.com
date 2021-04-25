import { render, screen } from "@testing-library/react"
import React from "react"
import { checkAccessibility } from "../../../testing/checks/accessibility.check"
import { ensureSeoTitle } from "../../../testing/checks/seo-title.check"
import { TestLayout } from "../../../testing/components/test-layout.component"
import { ProjectsPage } from "./projects-page"

const projects = [
  {
    name: "Project Name #1",
    projectLink: "https://radiatingstar.com/project-1",
    repoLink: "https://github.com/project-1",
    description: "Project #1 Description",
    tags: ["Acupuncture"],
    type: "Application",
  },
  {
    name: "Project Name #2",
    projectLink: "https://radiatingstar.com/project-2",
    repoLink: "https://github.com/project-2",
    description: "Project #2 Description",
    tags: ["Magic", "Alchemy"],
    type: "Library",
  },
]

const component = <ProjectsPage layout={TestLayout} projects={projects} />

describe("Projects Page component", () => {
  beforeEach(() => render(component))
  checkAccessibility(component)
  ensureSeoTitle("Projects")
  it("should display the main heading", () => {
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Projects"
    )
  })
  describe.each([0 as const, 1 as const])("for %s project", (index) => {
    it("should display the title", () => {
      expect(
        screen.getByRole("heading", { name: projects[index].name, level: 2 })
      ).toBeInTheDocument()
    })
    it.each([
      ["project", `Visit ${projects[index].name}`],
      ["project's repo", `Visit the ${projects[index].name} repository`],
    ])("should display the link to the %s", (_, text) => {
      expect(screen.queryByLabelText(text)).toBeInTheDocument()
    })
    it("should display the project's description", () => {
      expect(screen.getByText(projects[index].description)).toBeInTheDocument()
    })
    it.each(projects[index].tags)("should display the %s tag", (tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument()
    })
    it("should display the project's type", () => {
      expect(screen.getByText(projects[index].type)).toBeInTheDocument()
    })
  })
})
