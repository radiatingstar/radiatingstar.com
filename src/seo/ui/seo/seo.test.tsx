import { render, waitFor } from "@testing-library/react"
import { useStaticQuery } from "gatsby"
import React from "react"
import { SEO } from "./seo.component"

// The module is globally mocked, so need to clear it for this tests to work.
jest.unmock("./seo.component")

const getMeta = (metaName: string) => {
  // eslint-disable-next-line testing-library/no-node-access
  const metaElements = document.querySelectorAll("meta")
  for (const meta of metaElements) {
    if (meta.getAttribute("name") === metaName) {
      return meta.getAttribute("content")
    }
  }
  return ""
}

describe("SEO component", () => {
  beforeEach(() => {
    ;(useStaticQuery as jest.Mock).mockReturnValue({
      site: {
        siteMetadata: {
          title: "Title",
          description: "Default Description",
          author: "Author",
        },
      },
    })
  })
  describe("when passed title", () => {
    it("should set it on the document", async () => {
      render(<SEO title="Page Title" />)
      await waitFor(() => expect(document.title).toContain("Page Title"))
    })
  })
  describe("when passed a description", () => {
    it("should set it on the document", async () => {
      render(<SEO title="Page Title" description="Page Description" />)
      await waitFor(() => {
        expect(getMeta("description")).toBe("Page Description")
      })
    })
  })
  describe("when not passed a description", () => {
    it("should set it from meta", async () => {
      render(<SEO title="Page Title" />)
      await waitFor(() => {
        expect(getMeta("description")).toBe("Default Description")
      })
    })
  })
  describe("when not passed a language", () => {
    it("should set a default english value", async () => {
      render(<SEO title="Page Title" />)
      await waitFor(() => {
        // eslint-disable-next-line testing-library/no-node-access
        expect(document.querySelector("html")).toHaveAttribute("lang", "en")
      })
    })
  })
  describe("when passed a language", () => {
    it("should set it on the document", async () => {
      render(<SEO title="Page Title" language="pl" />)
      await waitFor(() => {
        // eslint-disable-next-line testing-library/no-node-access
        expect(document.querySelector("html")).toHaveAttribute("lang", "pl")
      })
    })
  })
})
