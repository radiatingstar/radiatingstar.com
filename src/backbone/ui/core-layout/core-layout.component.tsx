import React, { FunctionComponent, ReactElement } from "react"
import { createGlobalStyle } from "styled-components"
import { Logo } from "../../../branding"
import { mainNavigation } from "../../main-navigation-items"
import { Header } from "../header/header.component"
import { MainNavigation } from "../main-navigation/main-navigation.component"
import { SiteFooter } from "../site-footer/site-footer.component"
import { Badge } from "./elements/badge/badge.component"
import { PrimaryFooterContent } from "./elements/primary-footer-content/primary-footer-content.component"
import { SecondaryFooterContent } from "./elements/secondary-footer-content/secondary-footer-content.component"
import { TertiaryFooterContent } from "./elements/tertiary-footer-content/tertiary-footer-content.component"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
  }

  h1,
  h2 {
    font-family: 'Ubuntu', sans-serif;
  }
`

interface Properties {
  navigation?: ReactElement
}

export const CoreLayout: FunctionComponent<Properties> = ({
  children,
  navigation = <MainNavigation navigation={mainNavigation} />,
}) => {
  return (
    <div>
      <GlobalStyle />
      <Header logoSlot={<Logo />} navigationSlot={navigation} />
      <main>{children}</main>
      <SiteFooter
        primarySlot={
          <PrimaryFooterContent>
            © Radiating Star {new Date().getFullYear()}
          </PrimaryFooterContent>
        }
        secondarySlot={
          <SecondaryFooterContent>
            <span>
              Code available on{" "}
              <a
                href="https://github.com/radiatingstar/radiatingstar.com"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </span>
            <a
              href="https://twitter.com/radiatingstar"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </SecondaryFooterContent>
        }
        tertiarySlot={
          <TertiaryFooterContent>
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
              href="https://codeclimate.com/github/radiatingstar/radiatingstar.com/test_coverage"
              src="https://api.codeclimate.com/v1/badges/6580a1828697d56fe712/test_coverage"
              label="Code Climate Test Coverage"
            />
            <Badge
              href="https://app.netlify.com/sites/radiatingstarcom/deploys"
              src="https://api.netlify.com/api/v1/badges/630d6ad6-236a-4ed5-a2a7-69bcc3bd6dba/deploy-status"
              label="Netlify Build Status"
            />
          </TertiaryFooterContent>
        }
      />
    </div>
  )
}