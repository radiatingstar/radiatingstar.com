import React, { ReactNode, VoidFunctionComponent } from "react"
import styled from "styled-components"
interface Properties {
  primarySlot?: ReactNode
  secondarySlot?: ReactNode
}

export const SiteFooter: VoidFunctionComponent<Properties> = ({
  primarySlot,
  secondarySlot,
}) => {
  return (
    <FooterContainer>
      <Swag role="img" aria-hidden>
        ★
      </Swag>
      <PrimarySlot>{primarySlot}</PrimarySlot>
      <SecondarySlot>{secondarySlot}</SecondarySlot>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  display: grid;
  margin-top: auto;
  padding-block: 4rem;

  gap: 1rem;
  grid-template-areas: "Swag" "PrimarySlot" "SecondarySlot";

  @media (min-width: 32rem) {
    grid-template-areas: "PrimarySlot Swag SecondarySlot";
    grid-template-columns: 3fr 1fr 3fr;
    row-gap: 8rem;
    align-items: center;
  }
`

const PrimarySlot = styled.div`
  grid-area: PrimarySlot;
`

const Swag = styled.div`
  grid-area: Swag;
  pointer-events: none;
  text-align: center;
  user-select: none;
  font-size: 1.2rem;
`

const SecondarySlot = styled.div`
  grid-area: SecondarySlot;
`
