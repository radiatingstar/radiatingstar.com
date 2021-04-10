import React from "react"
import { render } from "@testing-library/react"
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
    it("should display all content", () => {
      const { getByText } = render(
        <MainNavigation navigation={navigationWithContent} />
      )
      expect(getByText("nav")).toBeInTheDocument()
      expect(getByText("nav-2")).toBeInTheDocument()
    })
    it("should display all links", () => {
      const { getByText } = render(
        <MainNavigation navigation={navigationWithContent} />
      )
      expect(getByText("nav")).toLinkTo("/nav")
      expect(getByText("nav-2")).toLinkTo("/nav-2")
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
