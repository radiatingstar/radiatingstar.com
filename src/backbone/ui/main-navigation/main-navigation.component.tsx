import { compact } from "fp-ts/Array"
import { map, Option, toNullable } from "fp-ts/Option"
import { pipe } from "fp-ts/pipeable"
import { Link } from "gatsby"
import React, { VoidFunctionComponent } from "react"
import styled from "styled-components"
import { assertDefined } from "../../../assertions"
import { Navigation } from "../../values/navigation/navigation.value"

interface Properties {
  navigation: Option<Navigation>
}

const NavigationList = styled.ul`
  // Reset.
  list-style: none;
  padding-left: 0;

  margin: 0;

  display: flex;
  gap: 0.5rem;

  font-size: 1.3rem;

  @media (min-width: 25rem) {
    gap: 2rem;
    margin: 0 2rem;
  }
`

const NavigationLink = styled(Link)`
  // Reset.
  text-decoration: none;

  //color: rgb(30, 30, 30);
  color: #268bd2;

  &:hover,
  &:active,
  &:focus {
    color: #ffa500;
  }

  &:focus {
    outline: none;
  }
`

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
            <NavigationList>
              {items.map((item, index) => {
                const path = toNullable(item.path)
                const name = toNullable(item.name)
                assertDefined(path)
                assertDefined(name)
                return (
                  <li key={index}>
                    <NavigationLink to={path.value}>
                      {name.value}
                    </NavigationLink>
                  </li>
                )
              })}
            </NavigationList>
          </nav>
        )
      })
    )
  )
}
