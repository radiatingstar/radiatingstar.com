import { Link } from "gatsby"
import React, { FunctionComponent, ReactElement } from "react"
import styled from "styled-components"
import { Logo } from "../../../branding"
import { mainNavigation } from "../../main-navigation-items"
import { GlobalStyle } from "../global-style/global-style.component"
import { Header } from "../header/header.component"
import { MainNavigation } from "../main-navigation/main-navigation.component"
import { FooterExternalLink } from "../site-footer/elements/footer-external-link/footer-external-link.component"
import { SiteFooter } from "../site-footer/site-footer.component"
import { Badge } from "./elements/badge/badge.component"
import { BasicFooterContent } from "./elements/basic-footer-content/basic-footer-content.component"
import { SecondaryFooterContent } from "./elements/secondary-footer-content/secondary-footer-content.component"
import { TertiaryFooterContent } from "./elements/tertiary-footer-content/tertiary-footer-content.component"

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
      <Header
        logoSlot={
          <HomeLink to="/" aria-label="Go back to the home page">
            <Logo />
          </HomeLink>
        }
        navigationSlot={navigation}
      />
      <Main>{children}</Main>
      <SiteFooter
        primarySlot={
          <BasicFooterContent>
            <FooterExternalLink href="https://github.com/radiatingstar/radiatingstar.com">
              Site&apos;s code available on GitHub
            </FooterExternalLink>
          </BasicFooterContent>
        }
        secondarySlot={
          <SecondaryFooterContent>
            <FooterExternalLink href="https://github.com/radiatingstar/">
              GitHub
            </FooterExternalLink>
            <FooterExternalLink href="https://twitter.com/radiatingstar">
              Twitter
            </FooterExternalLink>
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
        quaternarySlot={
          <BasicFooterContent toRight>
            © Radiating Star {new Date().getFullYear()}
          </BasicFooterContent>
        }
      />
    </PageContainer>
  )
}

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const HomeLink = styled(Link)`
  text-decoration: none;
`

const Main = styled.main`
  width: 100%;
  max-width: 88rem;
  margin-top: 4rem;
  margin-right: auto;
  margin-left: auto;
`
