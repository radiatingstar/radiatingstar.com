import { FaGithubSquare } from "@react-icons/all-files/fa/FaGithubSquare"
import { FaTwitterSquare } from "@react-icons/all-files/fa/FaTwitterSquare"
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
        <FaGithubSquare />
      </ContactLink>
    </li>
    <li>
      <ContactLink
        href="https://twitter.com/radiatingstar"
        label="RadiatingStar's Twitter"
      >
        <FaTwitterSquare />
      </ContactLink>
    </li>
  </HeaderList>
)

const ContactLink = styled(ExternalLink)`
  --size: 2rem;
  --shift: 200px;
  position: relative;
  display: block;
  overflow: hidden;
  width: var(--size);
  height: var(--size);
  color: currentColor;
  font-size: var(--size);

  &::before {
    position: absolute;
    content: "";
    inset: 0 0 0 calc(var(--shift) * -1);
    transition: transform 1s;
  }

  &:hover {
    background: #fff;
    color: #000;
    mix-blend-mode: multiply;

    &::before {
      background: var(--button-gradient);
      mix-blend-mode: screen;
      transform: translateX(var(--shift));
    }
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background: #000;
      color: #fff;
      mix-blend-mode: lighten;

      &::before {
        mix-blend-mode: multiply;
      }
    }
  }
`
