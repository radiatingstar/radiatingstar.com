import { Link } from "gatsby"
import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { Logo } from "../../../branding"
import { ExternalLink } from "../external-link/external-link.component"
import { GlobalStyle } from "../global-style/global-style.component"
import { Header } from "../header/header.component"
import { FooterLink } from "../site-footer/elements/footer-link/footer-link.component"
import { SiteFooter } from "../site-footer/site-footer.component"
import { BasicFooterContent } from "./elements/basic-footer-content/basic-footer-content.component"

export const CoreLayout: FunctionComponent = ({ children }) => {
  return (
    <PageContainer>
      <GlobalStyle />
      <Header
        logoSlot={
          <HomeLink to="/" rel="home" aria-label="Go back to the home page">
            <Logo />
          </HomeLink>
        }
        navigationSlot={
          <Navigation tags={["css", "aws", "typescript", "javascript"]} />
        }
        contactLinksSlot={<ContactLinks />}
      />
      <Main>{children}</Main>
      <Footer
        primarySlot={
          <BasicFooterContent>
            <FooterLink as={Link} to="/projects">
              Projects
            </FooterLink>
            <FooterLink as={Link} to="/tech">
              Tech stack
            </FooterLink>
          </BasicFooterContent>
        }
        secondarySlot={
          <BasicFooterContent toRight>
            <span translate="no">
              © Radiating Star {new Date().getFullYear()}
            </span>
          </BasicFooterContent>
        }
      />
    </PageContainer>
  )
}

const PageContainer = styled.div`
  --container-width: 1200px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const Main = styled.main`
  width: 100%;
  max-width: var(--container-width);
  margin-inline: auto;
`

const Footer = styled(SiteFooter)`
  margin-top: auto;
  margin-inline: auto;
  max-width: var(--container-width);
  width: 100%;
`

const HomeLink = styled(Link)`
  text-decoration: none;
`

const HeaderList = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
  margin: 0;
  gap: 10px;
`

const Navigation: FunctionComponent<{ tags: string[] }> = ({ tags }) => (
  <nav>
    <HeaderList>
      {tags.map((tag) => (
        <li key={tag}>
          {/* TODO */}
          {/* <NavigationLink
            to={`/tag/${tag}`}
            aria-label={`Go to posts tagged ${tag}`}
          > */}
          #{tag}
          {/* </NavigationLink> */}
        </li>
      ))}
    </HeaderList>
  </nav>
)

const NavigationLink = styled(Link)`
  text-decoration: none;
  color: var(--font-color);
  &:hover {
    color: var(--attention-color);
  }
`

const ContactLinks = () => (
  <HeaderList>
    <li>
      <ContactLink
        href="https://github.com/radiatingstar"
        label="RadiatingStar's GitHub"
      >
        github.com/radiatingstar
      </ContactLink>
    </li>
    <li>
      <ContactLink
        href="https://twitter.com/radiatingstar"
        label="RadiatingStar's Twitter"
      >
        @radiatingstar
      </ContactLink>
    </li>
  </HeaderList>
)

const ContactLink = styled(ExternalLink)`
  text-decoration: none;
  color: var(--font-color);
  &:hover {
    color: white;
  }
`
