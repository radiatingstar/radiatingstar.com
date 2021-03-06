import { render, screen } from "@testing-library/react"
import React from "react"
import { checkAccessibility } from "../../../testing/checks/accessibility.check"
import { List } from "./list.component"

describe("List component", () => {
  checkAccessibility(
    <List items={[{ name: "Aldebaran" }]} renderItem={() => <span />} />
  )
  describe.each([
    ["no items", []],
    ["nothing", undefined],
  ])("when %s were passed", (_, items) => {
    it("should render nothing", () => {
      render(<List items={items} renderItem={() => <span />} />)
      expect(screen.queryByRole("itemitem")).not.toBeInTheDocument()
    })
    describe("and fallback was passed", () => {
      it("should render it", () => {
        render(
          <List
            items={items}
            renderItem={() => <span />}
            fallback={<span>fallback</span>}
          />
        )
        expect(screen.getByText("fallback")).toBeInTheDocument()
      })
    })
  })
  describe("when items were passed", () => {
    beforeEach(() => {
      render(
        <List
          items={[{ name: "Betelgeuse" }, { name: "Antares A" }]}
          renderItem={(item, { last }) => (
            <span>
              {item.name}
              {last ? "-last" : ""}
            </span>
          )}
        />
      )
    })
    it("should render them", () => {
      expect(screen.getAllByRole("listitem")).toHaveLength(2)
      expect(screen.getByText(/Betelgeuse/)).toBeInTheDocument()
      expect(screen.getByText(/Antares A/)).toBeInTheDocument()
    })
    it("should pass the last info", () => {
      expect(screen.getByText("Antares A-last")).toBeInTheDocument()
    })
  })
})
