import { render } from "@testing-library/react"
import React from "react"
import { SiteFooter } from "./site-footer.component"

describe("Site Footer component", () => {
  describe.each([
    ["primary", () => <SiteFooter primarySlot={<div>primary</div>} />],
    ["secondary", () => <SiteFooter secondarySlot={<div>secondary</div>} />],
    ["tertiary", () => <SiteFooter tertiarySlot={<div>tertiary</div>} />],
  ])("when provided with %s content", (label, Content) => {
    it("should render it", () => {
      const { getByText } = render(<Content />)
      expect(getByText(label)).toBeInTheDocument()
    })
  })
})
