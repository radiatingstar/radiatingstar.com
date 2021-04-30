import React, { ReactNode, VoidFunctionComponent } from "react"
import styled from "styled-components"
import footerBcg from "./assets/footer-background.svg"

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
      <Swag role="img" aria-hidden>
        ★
      </Swag>
      <PrimarySlot>{primarySlot}</PrimarySlot>
      <SecondarySlot>{secondarySlot}</SecondarySlot>
      <TertiarySlot>{tertiarySlot}</TertiarySlot>
      <QuaternarySlot>{quaternarySlot}</QuaternarySlot>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  position: relative;

  display: grid;
  padding-bottom: 1rem;
  margin-top: auto;

  background-color: var(--black-300);
  background-image: url(${footerBcg});
  background-position: 50% calc(100%);
  background-repeat: repeat-x;
  color: white;

  gap: 1rem;
  grid-template-areas: "Swag" "PrimarySlot" "SecondarySlot" "TertiarySlot" "QuaternarySlot";

  @media (min-width: 32rem) {
    padding: 2rem;
    background-position: 50% calc(100% + 40px);
    grid-template-areas: "PrimarySlot Swag SecondarySlot" "TertiarySlot TertiarySlot QuaternarySlot";
    grid-template-columns: 3fr 1fr 3fr;
    row-gap: 8rem;
  }
`

const PrimarySlot = styled.div`
  grid-area: PrimarySlot;
`

const Swag = styled.div`
  margin-top: -3.5rem;
  margin-bottom: 2rem;
  color: var(--yellow-700);
  font-size: 7rem;
  grid-area: Swag;
  pointer-events: none;
  text-align: center;
  user-select: none;
  @media (min-width: 32rem) {
    margin-top: -6.8rem;
  }
`

const SecondarySlot = styled.div`
  margin-top: 2rem;
  grid-area: SecondarySlot;
  @media (min-width: 32rem) {
    margin-top: 0;
  }
`

const TertiarySlot = styled.div`
  /* Hide the overflow on really small devices. */
  overflow: hidden;
  margin: 0 1rem;
  grid-area: TertiarySlot;

  @media (min-width: 32rem) {
    width: min-content;
    margin: initial;
  }
`

const QuaternarySlot = styled.div`
  align-self: end;
  grid-area: QuaternarySlot;
`
