import { render } from "@testing-library/react"
import React from "react"
import { ExternalLink } from "./external-link.component"

describe("External Link component", () => {
  describe("when rendered", () => {
    let link: HTMLElement
    beforeEach(() => {
      const element = (
        <ExternalLink href={"https://nasa.gov"} className="space-agency">
          NASA
        </ExternalLink>
      )
      link = render(element).getByRole("link")
    })
    it("should be a link", () => {
      expect(link).toBeInTheDocument()
    })
    it("should have a href", () => {
      expect(link).toHaveAttribute("href", "https://nasa.gov")
    })
    it("should display the content", () => {
      expect(link).toHaveTextContent("NASA")
    })
    it("should be noreferrer and noopener by default", () => {
      const relation = link.getAttribute("rel")
      expect(relation).toMatch("noopener")
      expect(relation).toMatch("noreferrer")
    })
    it("should be styllable", () => {
      expect(link).toHaveClass("space-agency")
    })
  })
  describe.each(["nofollow", "noopener", "noreferrer"])(
    "when %s is passed",
    (type) => {
      describe.each([true, false])("as %s", (value) => {
        let relation: string | null
        beforeEach(() => {
          const element = (
            <ExternalLink
              href=""
              {...{
                [type]: value,
              }}
            />
          )
          relation = render(element).getByRole("link").getAttribute("rel")
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
