import { Link } from "gatsby"
import React from "react"
import { BlogHeaderComponent } from "../../../blog/ui/blog-header/blog-header.component"
import { SEO } from "../../../seo"

// FIXME: add props type
export const HomePage = (properties: any) => {
  const data = properties.data
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  return (
    <div>
      <SEO title={siteTitle} />
      <BlogHeaderComponent />
      <section className="m-2 bg-white max-w-lg p-2">
        <h3 className="font-bold text-2xl">Recent Posts</h3>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h4 className="my-4">
                <Link
                  to={"/blog" + node.fields.slug}
                  className="text-2xl text-yellow-500"
                >
                  {title}
                </Link>
              </h4>
            </div>
          )
        })}
        <Link to="/blog">Go to the blog</Link>
      </section>
    </div>
  )
}
