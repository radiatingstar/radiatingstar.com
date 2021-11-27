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
          <Navigation tags={["css", "javascript", "aws", "cloud"]} />
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
  margin-block-end: 5rem;
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
          <NavigationLink
            to={`/blog/tag/${tag}`}
            aria-label={`Go to posts tagged ${tag}`}
          >
            #{tag}
          </NavigationLink>
        </li>
      ))}
    </HeaderList>
  </nav>
)

const NavigationLink = styled(Link)`
  background: var(--font-color);
  font-family: "Nunito", sans-serif;
  font-weight: 900;
  text-decoration: none;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:hover {
    background: var(--text-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
  --transition-time: 500ms;
  position: relative;
  display: block;
  overflow: hidden;
  width: var(--size);
  height: var(--size);
  background: var(--background-color);
  color: var(--font-color);
  font-size: var(--size);
  mix-blend-mode: multiply;

  &::before {
    position: absolute;
    background-image: linear-gradient(
      90deg,
      var(--purple-10),
      var(--pink-20),
      var(--font-color) var(--shift),
      var(--font-color) var(--shift)
    );
    content: "";
    inset: 0 0 0 calc(var(--shift) * -1);
    mix-blend-mode: screen;
    transform: translateX(0);
    transition: transform var(--transition-time);
  }

  &:hover::before {
    transform: translateX(var(--shift));
    transition: transform var(--transition-time);
  }

  @media (prefers-color-scheme: dark) {
    mix-blend-mode: lighten;
    &::before {
      mix-blend-mode: multiply;
    }
  }
`
