import React, { ReactNode, VoidFunctionComponent } from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
  display: grid;
  grid-template-areas: "Swag" "PrimarySlot" "SecondarySlot" "TertiarySlot";

  @media (min-width: 32rem) {
    grid-template-areas: "PrimarySlot Swag SecondarySlot" "TertiarySlot TertiarySlot TertiarySlot";
    grid-template-columns: repeat(3, 1fr);
  }
`

const PrimarySlot = styled.div`
  grid-area: PrimarySlot;
`

const Swag = styled.div`
  grid-area: Swag;
  text-align: center;
`

const SecondarySlot = styled.div`
  grid-area: SecondarySlot;
`

const TertiarySlot = styled.div`
  grid-area: TertiarySlot;
`

interface Properties {
  primarySlot?: ReactNode
  secondarySlot?: ReactNode
  tertiarySlot?: ReactNode
}

export const SiteFooter: VoidFunctionComponent<Properties> = ({
  primarySlot,
  secondarySlot,
  tertiarySlot,
}) => {
  return (
    <FooterContainer>
      <PrimarySlot>{primarySlot}</PrimarySlot>
      <Swag role={"img"}>★</Swag>
      <SecondarySlot>{secondarySlot}</SecondarySlot>
      <TertiarySlot>{tertiarySlot}</TertiarySlot>
    </FooterContainer>
  )
}
