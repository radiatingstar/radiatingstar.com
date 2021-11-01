import React, { ReactNode, VoidFunctionComponent } from "react"
import styled from "styled-components"

interface Properties {
  logoSlot?: ReactNode
  navigationSlot?: ReactNode
  contactLinksSlot?: ReactNode
}

export const HeaderContainer = styled.header`
  background: var(--attention-color);
`

const HeaderContent = styled.div`
  margin-inline: auto;
  max-width: var(--container-width);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding-block: 2rem;
`

const MainPart = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const Header: VoidFunctionComponent<Properties> = ({
  logoSlot: logo,
  navigationSlot: navigation,
  contactLinksSlot: contactLinks,
}) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <MainPart>
          {logo}
          {navigation}
        </MainPart>
        {contactLinks}
      </HeaderContent>
    </HeaderContainer>
  )
}
