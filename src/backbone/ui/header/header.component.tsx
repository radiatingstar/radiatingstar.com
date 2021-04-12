import React, { ReactNode, VoidFunctionComponent } from "react"
import styled from "styled-components"

interface Properties {
  logoSlot?: ReactNode
  navigationSlot?: ReactNode
}

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
`

export const Header: VoidFunctionComponent<Properties> = ({
  logoSlot: logo,
  navigationSlot: navigation,
}) => {
  return (
    <HeaderContainer>
      {logo}
      {navigation}
    </HeaderContainer>
  )
}
