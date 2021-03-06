import { Link, PageProps } from "gatsby"
import React, { FunctionComponent } from "react"
import { BlogIndexQuery } from "../../../../graphql-types"
import { assertDefined } from "../../../assertions"
import { SEO } from "../../../seo"
import { BlogLayout } from "../blog-layout/blog-layout.component"

export const BlogIndexPage: FunctionComponent<PageProps<BlogIndexQuery>> = ({
  data: { allPosts },
}) => {
  return (
    <BlogLayout>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      {allPosts.edges.map(({ node: { excerpt, fields, frontmatter } }) => {
        assertDefined(frontmatter)
        assertDefined(fields)
        assertDefined(excerpt)
        const title = frontmatter.title || fields.slug
        return (
          <div key={fields.slug} className="mt-6">
            <h2 className="mb-2 text-2xl text-yellow-500 font-bold">
              <Link className="shadow-none" to={"/blog" + fields.slug}>
                {title}
              </Link>
            </h2>
            <small>{frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{ __html: excerpt }} />
          </div>
        )
      })}
    </BlogLayout>
  )
}
