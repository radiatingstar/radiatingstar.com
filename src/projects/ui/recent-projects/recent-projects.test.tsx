import { render, screen } from "@testing-library/react"
import React from "react"
import { RecentProjects } from "./recent-projects.component"

describe("Recent Projects List component", () => {
  it("should render projects", () => {
    render(
      <RecentProjects
        projects={[
          { title: "Mars Project", link: "https://mars.nasa.gov/msl/home/" },
          {
            title: "Artemis Project",
            link: "https://www.nasa.gov/specials/artemis/",
          },
        ]}
      />
    )
    expect(screen.getByText("Mars Project")).toBeInTheDocument()
    expect(screen.getByText("Artemis Project")).toBeInTheDocument()
    expect(
      screen.getByRole("link", { name: "Mars Project" })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("link", { name: "Artemis Project" })
    ).toBeInTheDocument()
  })
})
