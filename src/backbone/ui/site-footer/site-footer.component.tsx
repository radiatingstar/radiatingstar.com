import React, { ReactNode, VoidFunctionComponent } from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
  margin-top: auto;
  border-top: 1px solid black;
  padding-bottom: 1rem;

  display: grid;
  grid-template-areas: "Swag" "PrimarySlot" "SecondarySlot" "TertiarySlot";
  gap: 1rem;

  background: repeating-linear-gradient(
    // Matches the angle of the star.
    36deg,
    black,
    black 10px,
    rgb(20, 20, 20) 10px,
    rgb(20, 20, 20) 20px
  );

  color: #ffa500;

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
  margin: 0 1rem;

  // Hide the overflow on really small devices
  overflow: hidden;

  @media (min-width: 32rem) {
    margin: initial;
    width: min-content;
  }
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
