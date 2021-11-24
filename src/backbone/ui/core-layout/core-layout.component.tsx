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
  --container-max-width: 1200px;
  --block-inline-padding: 2rem;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
`

const Main = styled.main`
  width: 100%;
  max-width: var(--container-max-width);
  margin-inline: auto;
  padding-inline: var(--block-inline-padding);
`

const Footer = styled(SiteFooter)`
  width: 100%;
  max-width: var(--container-max-width);
  margin-top: auto;
  margin-inline: auto;
  padding-inline: var(--block-inline-padding);
`

const HomeLink = styled(Link)`
  text-decoration: none;
`

const HeaderList = styled.ul`
  display: flex;
  padding-left: 0;
  margin: 0;
  gap: 10px;
  list-style: none;
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
  color: var(--font-color);
  text-decoration: none;

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
        github/radiatingstar
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
  //background: var(--font-color);
  //-webkit-background-clip: text;
  //text-decoration: none;
  //-webkit-text-fill-color: transparent;
  //
  //&:hover {
  //  background: var(--text-gradient);
  //  -webkit-background-clip: text;
  //  -webkit-text-fill-color: transparent;
  //}

  text-decoration: none;
  color: white;

  position: relative;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0 0 0 0;
    background: var(--button-gradient);
    padding: 1rem;
    border-radius: 10px;

    //clip-path: circle(0% at 50% 50%);
    transition: clip-path 200ms;
    transform: translateY(-5px);
  }

  &:hover::before {
    clip-path: circle(100% at 50% 50%);
  }
`
