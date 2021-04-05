import React, { FunctionComponent, ReactElement } from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Logo } from "../../../branding"
import { mainNavigation } from "../../main-navigation-items"
import { Header } from "../header/header.component"
import { MainNavigation } from "../main-navigation/main-navigation.component"
import { FooterExternalLinkPill } from "../site-footer/elements/footer-external-link-pill/footer-external-link-pill.component"
import { FooterExternalLink } from "../site-footer/elements/footer-external-link/footer-external-link.component"
import { SiteFooter } from "../site-footer/site-footer.component"
import { Badge } from "./elements/badge/badge.component"
import { PrimaryFooterContent } from "./elements/primary-footer-content/primary-footer-content.component"
import { QuaternaryFooterContent } from "./elements/quaternary-footer-content/quaternary-footer-content.component"
import { SecondaryFooterContent } from "./elements/secondary-footer-content/secondary-footer-content.component"
import { TertiaryFooterContent } from "./elements/tertiary-footer-content/tertiary-footer-content.component"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    color: rgb(30, 30, 30);
  }

  h1,
  h2 {
    font-family: 'Ubuntu', sans-serif;
  }
`

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

interface Properties {
  navigation?: ReactElement
}

export const CoreLayout: FunctionComponent<Properties> = ({
  children,
  navigation = <MainNavigation navigation={mainNavigation} />,
}) => {
  return (
    <PageContainer>
      <GlobalStyle />
      <Header logoSlot={<Logo />} navigationSlot={navigation} />
      <main>{children}</main>
      <SiteFooter
        primarySlot={
          <PrimaryFooterContent>
            <span>© Radiating Star {new Date().getFullYear()}</span>
            <FooterExternalLink href="https://github.com/radiatingstar/radiatingstar.com">
              Site&apos;s code available on GitHub
            </FooterExternalLink>
          </PrimaryFooterContent>
        }
        secondarySlot={
          <SecondaryFooterContent>
            <FooterExternalLinkPill href="https://github.com/radiatingstar/">
              GitHub
            </FooterExternalLinkPill>
            <FooterExternalLinkPill href="https://twitter.com/radiatingstar">
              Twitter
            </FooterExternalLinkPill>
          </SecondaryFooterContent>
        }
        tertiarySlot={
          <TertiaryFooterContent>
            <Badge
              href="https://codeclimate.com/github/radiatingstar/radiatingstar.com/test_coverage"
              src="https://api.codeclimate.com/v1/badges/6580a1828697d56fe712/test_coverage"
              label="Code Climate Test Coverage"
            />
            <Badge
              href="https://codecov.io/gh/radiatingstar/radiatingstar.com"
              src="https://codecov.io/gh/radiatingstar/radiatingstar.com/branch/master/graph/badge.svg?token=yOUq7lvbnS"
              label="Codecov"
            />
            <Badge
              href="https://codeclimate.com/github/radiatingstar/radiatingstar.com/maintainability"
              src="https://api.codeclimate.com/v1/badges/6580a1828697d56fe712/maintainability"
              label="Code Climate Maintainability"
            />
            <Badge
              href="https://app.netlify.com/sites/radiatingstarcom/deploys"
              src="https://api.netlify.com/api/v1/badges/630d6ad6-236a-4ed5-a2a7-69bcc3bd6dba/deploy-status"
              label="Netlify Build Status"
            />
          </TertiaryFooterContent>
        }
        quaternarySlot={<QuaternaryFooterContent />}
      />
    </PageContainer>
  )
}
