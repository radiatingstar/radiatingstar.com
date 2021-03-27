import { compact } from "fp-ts/Array"
import { map, Option, toNullable } from "fp-ts/Option"
import { pipe } from "fp-ts/pipeable"
import { Link } from "gatsby"
import React, { VoidFunctionComponent } from "react"
import { assertDefined } from "../../../assertions"
import { Navigation } from "../../values/navigation/navigation.value"

interface Properties {
  navigation: Option<Navigation>
}

export const MainNavigation: VoidFunctionComponent<Properties> = ({
  navigation,
}) => {
  return toNullable(
    pipe(
      navigation,
      map((nav) => [...nav.items]),
      map(compact),
      map((items) => {
        return (
          <nav>
            <ul>
              {items.map((item, index) => {
                const path = toNullable(item.path)
                const name = toNullable(item.name)
                assertDefined(path)
                assertDefined(name)
                return (
                  <li key={index}>
                    <Link to={path.value}>{name.value}</Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        )
      })
    )
  )
}
