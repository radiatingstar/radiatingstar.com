import { graphql, useStaticQuery } from "gatsby"
import React, { FunctionComponent } from "react"
import Helmet, { HelmetProps } from "react-helmet"
import { generateMeta } from "../../meta/generate-meta"

interface Properties {
  /**
   * Page title.
   */
  title: string
  /**
   * Page description. About 150 characters.
   */
  description?: string
  /**
   * Language, but useless.
   */
  language?: "en" | "pl"
  /**
   * List of meta properties.
   */
  meta?: HelmetProps["meta"]
  /**
   * List of keywords. Someone even uses it?
   */
  keywords?: string[]
}

export const SEO: FunctionComponent<Readonly<Properties>> = ({
  title,
  description,
  language = "en",
  meta = [],
  keywords = [],
}) => {
  const data = useStaticQuery(detailsQuery)
  const metaDescription = description || data.site.siteMetadata.description
  const resultMeta = generateMeta({
    title,
    description: metaDescription,
    keywords,
    otherMeta: meta,
    author: data.site.siteMetadata.author,
  })
  return (
    <Helmet
      htmlAttributes={{
        language,
      }}
      title={title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={resultMeta}
    />
  )
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
