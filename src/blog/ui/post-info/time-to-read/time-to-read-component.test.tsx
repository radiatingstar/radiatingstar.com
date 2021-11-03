import { render, screen } from "@testing-library/react"
import React from "react"
import { TimeToRead } from "./time-to-read.component"

describe("Time to Read component", () => {
  it("should display the singular minute property", () => {
    render(<TimeToRead time={1} />)
    expect(screen.getByText("1 minute to read")).toBeInTheDocument()
  })

  it("should display the multi-minute properly", () => {
    render(<TimeToRead time={10} />)
    expect(screen.getByText("10 minutes to read")).toBeInTheDocument()
  })
})
