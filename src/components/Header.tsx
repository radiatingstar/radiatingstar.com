import React, { FunctionComponent } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

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

export const Header: FunctionComponent = () => {
  const {
    logo,
    site: {
      siteMetadata: { description, title },
    },
  } = useStaticQuery(headerQuery)

  return (
    <header className="m-2 p-2 max-w-lg">
      <Link to={`/`} className="flex items-center">
        <Image fixed={logo.childImageSharp.fixed} />
        <div className="ml-4">
          <h1 className="m-0 font-bold text-4xl">{title}</h1>
          <h2 className="font-bold">{description}</h2>
        </div>
      </Link>
    </header>
  )
}
