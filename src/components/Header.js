import React from 'react'
import styled from 'styled-components'
import { Link, StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm, scale } from '../utils/typography'

const Title = styled.h1`
  ${scale(1)};
  margin: 0;
`

const Description = styled.h2`
  font-size: ${rhythm(0.5)};
`

const SiteLabel = styled(Link)`
  display: flex;
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
            <header>
              <SiteLabel to={`/`}>
                <Image fixed={data.logo.childImageSharp.fixed} />
                <SiteInfo>
                  <Title>{title}</Title>
                  <Description>{description}</Description>
                </SiteInfo>
              </SiteLabel>
            </header>
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
        fixed(width: 60, height: 60) {
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
