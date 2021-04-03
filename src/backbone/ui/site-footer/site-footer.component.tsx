import React, { ReactNode, VoidFunctionComponent } from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
  margin-top: 2rem;
  border-top: 1px solid darkgray;
  padding-bottom: 1rem;

  display: grid;
  grid-template-areas: "Swag" "PrimarySlot" "SecondarySlot" "TertiarySlot";
  gap: 1rem;

  background-color: rgb(20, 20, 20);
  color: rgb(240, 240, 240);

  @media (min-width: 32rem) {
    grid-template-areas: "PrimarySlot Swag SecondarySlot" "TertiarySlot TertiarySlot TertiarySlot";
    grid-template-columns: 3fr 1fr 3fr;
    padding: 2rem;
  }
`

const PrimarySlot = styled.div`
  grid-area: PrimarySlot;
`

const Swag = styled.div`
  grid-area: Swag;
  text-align: center;
  margin-top: -3.5rem;
  margin-bottom: 2rem;

  font-size: 7rem;
  color: #ffa500;
  -webkit-text-stroke: 10px white;

  @media (min-width: 32rem) {
    margin-top: -5.5rem;
  }
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
      <Swag role={"img"}>★</Swag>
      <PrimarySlot>{primarySlot}</PrimarySlot>
      <SecondarySlot>{secondarySlot}</SecondarySlot>
      <TertiarySlot>{tertiarySlot}</TertiarySlot>
    </FooterContainer>
  )
}
