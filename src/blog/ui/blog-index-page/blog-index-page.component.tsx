import { Link, PageProps } from "gatsby"
import React, {
  FunctionComponent,
  JSXElementConstructor,
  PropsWithChildren,
} from "react"
import { BlogIndexQuery } from "../../../../graphql-types"
import { assertDefined } from "../../../assertions"
import { CoreLayout } from "../../../backbone"
import { SEO } from "../../../seo"

type Properties = Pick<PageProps<BlogIndexQuery>, "data"> & {
  layout?: JSXElementConstructor<PropsWithChildren<unknown>>
}

export const BlogIndexPage: FunctionComponent<Properties> = ({
  data: { allPosts },
  layout: Layout = CoreLayout,
}) => {
  return (
    <Layout>
      <SEO title="All posts" />
      {allPosts.edges.map(({ node: { excerpt, fields, frontmatter } }) => {
        assertDefined(frontmatter)
        assertDefined(fields)
        assertDefined(excerpt)
        const title = frontmatter.title || fields.slug
        return (
          <div key={fields.slug}>
            <h2>
              <Link to={"/blog" + fields.slug}>{title}</Link>
            </h2>
            <small>{frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{ __html: excerpt }} />
          </div>
        )
      })}
    </Layout>
  )
}
