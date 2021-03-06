import { render, screen } from "@testing-library/react"
import React from "react"
import { checkAccessibility } from "../../../testing/checks/accessibility.check"
import { ExternalLink } from "./external-link.component"

const component = (
  <ExternalLink
    href={"https://nasa.gov"}
    className="space-agency"
    label="Go to the NASA page"
  >
    NASA
  </ExternalLink>
)

describe("External Link component", () => {
  checkAccessibility(component)
  describe("when rendered", () => {
    beforeEach(() => {
      render(component)
    })
    it("should be a link", () => {
      expect(screen.getByRole("link")).toBeInTheDocument()
    })
    it("should have a href", () => {
      expect(screen.getByRole("link")).toLinkTo("https://nasa.gov")
    })
    it("should display the content", () => {
      expect(screen.getByRole("link")).toHaveTextContent("NASA")
    })
    it("should add a label", () => {
      expect(screen.getByLabelText("Go to the NASA page")).toBeInTheDocument()
    })
    it("should be noreferrer and noopener by default", () => {
      const relation = screen.getByRole("link").getAttribute("rel")
      expect(relation).toMatch("noopener")
      expect(relation).toMatch("noreferrer")
    })
    it("should be stylable", () => {
      expect(screen.getByRole("link")).toHaveClass("space-agency")
    })
  })
  describe.each(["nofollow", "noopener", "noreferrer"])(
    "when %s is passed",
    (type) => {
      describe.each([true, false])("as %s", (value) => {
        let relation: string | null
        beforeEach(() => {
          render(
            <ExternalLink
              href=""
              {...{
                [type]: value,
              }}
            />
          )
          relation = screen.getByRole("link").getAttribute("rel")
        })
        it(
          value ? "should set it on the link" : "should not set it on the link",
          () => {
            value
              ? expect(relation).toMatch(type)
              : expect(relation).not.toMatch(type)
          }
        )
      })
    }
  )
})
