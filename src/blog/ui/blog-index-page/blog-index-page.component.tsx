import { Link, PageProps } from "gatsby"
import React, { FunctionComponent } from "react"
import { BlogIndexQuery } from "../../../../graphql-types"
import { assertDefined } from "../../../assertions"
import { CoreLayout } from "../../../backbone"
import { SEO } from "../../../seo"

export const BlogIndexPage: FunctionComponent<PageProps<BlogIndexQuery>> = ({
  data: { allPosts },
}) => {
  return (
    <CoreLayout>
      <SEO title="All posts" />
      {allPosts.edges.map(({ node: { excerpt, fields, frontmatter } }) => {
        assertDefined(frontmatter)
        assertDefined(fields)
        assertDefined(excerpt)
        const title = frontmatter.title || fields.slug
        return (
          <div key={fields.slug} className="mt-6">
            <h2>
              <Link to={"/blog" + fields.slug}>{title}</Link>
            </h2>
            <small>{frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{ __html: excerpt }} />
          </div>
        )
      })}
    </CoreLayout>
  )
}
