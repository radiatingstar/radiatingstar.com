import React, { ReactNode, VoidFunctionComponent } from "react"
import styled from "styled-components"
import { Stylable } from "../.."

interface Properties {
  primarySlot?: ReactNode
  secondarySlot?: ReactNode
}

export const SiteFooter: VoidFunctionComponent<Stylable<Properties>> = ({
  primarySlot,
  secondarySlot,
  className,
}) => {
  return (
    <FooterContainer className={className}>
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
  gap: 1rem;
  grid-template-areas: "Swag" "PrimarySlot" "SecondarySlot";
  padding-block: 4rem;

  @media (min-width: 32rem) {
    grid-template-areas: "PrimarySlot Swag SecondarySlot";
    grid-template-columns: 3fr 1fr 3fr;
    place-items: center stretch;
    row-gap: 8rem;
  }
`

const PrimarySlot = styled.div`
  grid-area: PrimarySlot;
`

const Swag = styled.div`
  font-size: 1.2rem;
  grid-area: Swag;
  pointer-events: none;
  text-align: center;
  user-select: none;
`

const SecondarySlot = styled.div`
  grid-area: SecondarySlot;
`
