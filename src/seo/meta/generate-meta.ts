import { HelmetProps } from "react-helmet"

interface MetaProperties {
  /**
   * Page title.
   */
  title: string
  /**
   * Page description. About 150 characters.
   */
  description: string
  /**
   * List of meta properties.
   */
  otherMeta?: HelmetProps["meta"]
  /**
   * List of keywords. Someone even uses it?
   */
  keywords?: string[]
  /**
   * Author of the content.
   */
  author: string
}

/**
 * Creates an array of meta properties used in the Helmet component.
 * Allows to pass other props that will be spread at the end.
 */
export function generateMeta({
  description,
  title,
  author,
  keywords = [],
  otherMeta = [],
}: MetaProperties): HelmetProps["meta"] {
  return [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
    ...(keywords.length > 0
      ? [
          {
            name: `keywords`,
            content: keywords.join(`, `),
          },
        ]
      : []),
    ...otherMeta,
  ]
}
