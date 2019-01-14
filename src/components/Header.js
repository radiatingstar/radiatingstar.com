import React from 'react'
import styled from 'styled-components'
import { Link, StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm, scale } from '../utils/typography'

export default class Header extends React.Component {
  render() {
    return (
      <StaticQuery
        query={headerQuery}
        render={data => {
          const { title, description } = data.site.siteMetadata
          return (
            <header>
              <h1
                style={{
                  ...scale(1.5),
                  marginBottom: rhythm(1.5),
                  marginTop: 0,
                }}
              >
                <Link
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                  }}
                  to={`/`}
                >
                  <Image fixed={data.logo.childImageSharp.fixed} />
                  {title}
                  {description}
                </Link>
              </h1>
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
        fixed(width: 50, height: 50) {
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
