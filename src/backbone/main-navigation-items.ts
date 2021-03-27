import { AppPath } from "./values/app-path/app-path.value"
import { NavigationItemName } from "./values/navigation-item-name/navigation-item-name.value"
import { NavigationItem } from "./values/navigation-item/navigation-item.value"
import { Navigation } from "./values/navigation/navigation.value"

export const mainNavigation = Navigation.create(
  NavigationItem.create({
    name: NavigationItemName.from("Blog"),
    path: AppPath.from("/blog"),
  }),
  NavigationItem.create({
    name: NavigationItemName.from("Projects"),
    path: AppPath.from("/projects"),
  }),
  NavigationItem.create({
    name: NavigationItemName.from("Contact"),
    path: AppPath.from("/contact"),
  })
)
