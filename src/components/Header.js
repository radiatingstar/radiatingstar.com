import React from 'react'
import styled from 'styled-components'
import { Link, StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { rhythm, scale } from '../utils/typography'

const HeaderContainer = styled.header`
  margin: ${rhythm(1.5)} auto 0;
  padding: ${rhythm(1)};
  max-width: ${rhythm(32)};
  background: white;
  a {color: hsla(0,0%,0%,0.9)}
  
  @media screen and (min-width: 40rem) {
    padding: ${rhythm(1.5)} ${rhythm(3)};
  }
`

const Title = styled.h1`
  ${scale(1)};
  margin: 0;
`

const Description = styled.h2`
  font-size: ${rhythm(0.5)};
  margin: 0;
`

const SiteLabel = styled(Link)`
  display: flex;
  align-items: center;
`

const SiteInfo = styled.div`
  margin-left: ${rhythm(1)}
`

export default class Header extends React.Component {
  render() {
    return (
      <StaticQuery
        query={headerQuery}
        render={data => {
          const { title, description } = data.site.siteMetadata
          return (
            <HeaderContainer>
              <SiteLabel to={`/`}>
                <Image fixed={data.logo.childImageSharp.fixed} />
                <SiteInfo>
                  <Title>{title}</Title>
                  <Description>{description}</Description>
                </SiteInfo>
              </SiteLabel>
            </HeaderContainer>
          )
        }}
      />
    )
  }
}

const headerQuery = graphql`
  query HeaderQuery {
    logo: file(absolutePath: { regex: "/radiating-star.logo.png/" }) {
      childImageSharp {
        fixed(width: 55, height: 55) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
