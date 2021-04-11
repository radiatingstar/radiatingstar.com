import { render, screen } from "@testing-library/react"
import React from "react"
import { SiteFooter } from "./site-footer.component"

describe("Site Footer component", () => {
  describe.each([
    ["primary", () => <SiteFooter primarySlot={<div>primary</div>} />],
    ["secondary", () => <SiteFooter secondarySlot={<div>secondary</div>} />],
    ["tertiary", () => <SiteFooter tertiarySlot={<div>tertiary</div>} />],
    ["quaternary", () => <SiteFooter quaternarySlot={<div>quaternary</div>} />],
  ])("when provided with %s content", (label, Content) => {
    it("should render it", () => {
      render(<Content />)
      expect(screen.getByText(label)).toBeInTheDocument()
    })
  })
})
