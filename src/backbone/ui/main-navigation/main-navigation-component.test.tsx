import React from "react"
import { render, screen } from "@testing-library/react"
import { AppPath } from "../../values/app-path/app-path.value"
import { NavigationItemName } from "../../values/navigation-item-name/navigation-item-name.value"
import { NavigationItem } from "../../values/navigation-item/navigation-item.value"
import { Navigation } from "../../values/navigation/navigation.value"
import { MainNavigation } from "./main-navigation.component"

describe("Main Navigation component", () => {
  describe("when provided with navigation with content", () => {
    const navigationWithContent = Navigation.create(
      NavigationItem.create({
        name: NavigationItemName.from("nav"),
        path: AppPath.from("/nav"),
      }),
      NavigationItem.create({
        name: NavigationItemName.from("nav-2"),
        path: AppPath.from("/nav-2"),
      })
    )
    beforeEach(() =>
      render(<MainNavigation navigation={navigationWithContent} />)
    )
    it("should display all content", () => {
      expect(screen.getByText("nav")).toBeInTheDocument()
      expect(screen.getByText("nav-2")).toBeInTheDocument()
    })
    it("should display all links", () => {
      expect(screen.getByText("nav")).toLinkTo("/nav")
      expect(screen.getByText("nav-2")).toLinkTo("/nav-2")
    })
  })
  describe("when provided with empty navigation", function () {
    it("should not render anything", () => {
      const { container } = render(
        <MainNavigation navigation={Navigation.create()} />
      )
      expect(container).toBeEmptyDOMElement()
    })
  })
})
