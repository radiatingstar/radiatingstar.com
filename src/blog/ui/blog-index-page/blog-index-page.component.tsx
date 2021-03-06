import { Link } from "gatsby"
import React from "react"
import { SEO } from "../../../seo"
import { BlogLayout } from "../blog-layout/blog-layout.component"

// FIXME: Add props type.
export const BlogIndexPage = (properties: any) => {
  const { data } = properties
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <BlogLayout
      location={properties.location}
      title={siteTitle}
      style={{ paddingBottom: '5rem' }}
    >
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <div key={node.fields.slug} className="mt-6">
            <h2 className="mb-2 text-2xl text-yellow-500 font-bold">
              <Link className="shadow-none" to={'/blog' + node.fields.slug}>
                {title}
              </Link>
            </h2>
            <small>{node.frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        )
      })}
    </BlogLayout>
  )
}
