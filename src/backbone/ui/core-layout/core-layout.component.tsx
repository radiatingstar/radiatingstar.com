import { FaGithubSquare } from "@react-icons/all-files/fa/FaGithubSquare"
import { FaTwitterSquare } from "@react-icons/all-files/fa/FaTwitterSquare"
import { Link } from "gatsby"
import React, { FunctionComponent, ReactElement } from "react"
import styled from "styled-components"
import { Logo } from "../../../branding"
import { mainNavigation } from "../../main-navigation-items"
import { ExternalLink } from "../external-link/external-link.component"
import { GlobalStyle } from "../global-style/global-style.component"
import { Header } from "../header/header.component"
import { MainNavigation } from "../main-navigation/main-navigation.component"
import { FooterLink } from "../site-footer/elements/footer-link/footer-link.component"
import { SiteFooter } from "../site-footer/site-footer.component"
import { BasicFooterContent } from "./elements/basic-footer-content/basic-footer-content.component"
import { SecondaryFooterContent } from "./elements/secondary-footer-content/secondary-footer-content.component"

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
        tertiarySlot={
          <BasicFooterContent>
            <FooterLink
              as={ExternalLink}
              href="https://github.com/radiatingstar/radiatingstar.com"
            >
              Site&apos;s code available on GitHub
            </FooterLink>
            <FooterLink as={Link} to="/tech">
              Tech stack
            </FooterLink>
          </BasicFooterContent>
        }
        secondarySlot={
          <SecondaryFooterContent>
            <FooterLink
              as={ExternalLink}
              href="https://github.com/radiatingstar/"
              label="GitHub"
            >
              <Icon as={FaGithubSquare} />
            </FooterLink>
            <FooterLink
              as={ExternalLink}
              href="https://twitter.com/radiatingstar"
              label="Twitter"
            >
              <Icon as={FaTwitterSquare} />
            </FooterLink>
          </SecondaryFooterContent>
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

const Icon = styled.i`
  font-size: 200%;
`
