import React, { ReactNode, VoidFunctionComponent } from "react"
import styled from "styled-components"
import footerBcg from "./assets/footer-background.svg"

const FooterContainer = styled.footer`
  position: relative;

  margin-top: auto;
  border-top: 1px solid black;
  padding-bottom: 1rem;

  display: grid;
  grid-template-areas: "Swag" "PrimarySlot" "SecondarySlot" "TertiarySlot" "QuaternarySlot";
  gap: 1rem;

  background-color: black;
  background-image: url(${footerBcg});
  background-position: 50% calc(100%);
  background-repeat: repeat-x;

  color: #ffa500;

  @media (min-width: 32rem) {
    padding: 2rem;
    grid-template-areas: "PrimarySlot Swag SecondarySlot" "TertiarySlot TertiarySlot QuaternarySlot";
    grid-template-columns: 3fr 1fr 3fr;
    row-gap: 8rem;
    background-position: 50% calc(100% + 40px);
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
  -webkit-text-stroke: 10px black;

  @media (min-width: 32rem) {
    margin-top: -4.8rem;
  }
`

const SecondarySlot = styled.div`
  grid-area: SecondarySlot;
  margin-top: 2rem;
  @media (min-width: 32rem) {
    margin-top: 0;
  }
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

const QuaternarySlot = styled.div`
  grid-area: QuaternarySlot;
  align-self: end;
`

interface Properties {
  primarySlot?: ReactNode
  secondarySlot?: ReactNode
  tertiarySlot?: ReactNode
  quaternarySlot?: ReactNode
}

export const SiteFooter: VoidFunctionComponent<Properties> = ({
  primarySlot,
  secondarySlot,
  tertiarySlot,
  quaternarySlot,
}) => {
  return (
    <FooterContainer>
      <Swag role={"img"}>★</Swag>
      <PrimarySlot>{primarySlot}</PrimarySlot>
      <SecondarySlot>{secondarySlot}</SecondarySlot>
      <TertiarySlot>{tertiarySlot}</TertiarySlot>
      <QuaternarySlot>{quaternarySlot}</QuaternarySlot>
    </FooterContainer>
  )
}
