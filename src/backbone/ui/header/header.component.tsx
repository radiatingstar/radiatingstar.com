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
  max-width: var(--container-max-width);
  padding-inline: var(--block-inline-padding);
  padding-block: 2rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 100fr;
  align-items: center;

  > :first-child {
    grid-row: 1 / 3;
  }

  @media (min-width: 25rem) {
    gap: 2rem;
  }

  @media (min-width: 48rem) {
    grid-template-columns: 1fr 100fr 1fr;

    > :first-child {
      grid-row: 1 / 1;
    }
  }
`

export const Header: VoidFunctionComponent<Properties> = ({
  logoSlot: logo,
  navigationSlot: navigation,
  contactLinksSlot: contactLinks,
}) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        {logo}
        {navigation}
        {contactLinks}
      </HeaderContent>
    </HeaderContainer>
  )
}
