import { graphql, Link, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import React, { FunctionComponent } from "react"

export const BlogHeaderComponent: FunctionComponent = () => {
  const {
    logo,
    site: {
      siteMetadata: { description, title },
    },
  } = useStaticQuery(blogHeaderQuery)

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

const blogHeaderQuery = graphql`
  query BlogHeaderQuery {
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
