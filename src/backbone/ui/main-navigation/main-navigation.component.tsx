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

const NavigationList = styled.ul`
  display: flex;
  padding-left: 0;
  margin: 0;
  font-size: 1.3rem;
  gap: 0.5rem;
  list-style: none;

  @media (min-width: 25rem) {
    gap: 2rem;
  }
`

const NavigationLink = styled(Link)`
  color: var(--yellow-700);
  font-weight: 900;
  letter-spacing: 0.2rem;
  text-decoration: none;
  text-transform: uppercase;

  &:hover,
  &:active,
  &:focus {
    color: var(--yellow-400);
  }

  &:focus {
    outline: none;
  }
`
