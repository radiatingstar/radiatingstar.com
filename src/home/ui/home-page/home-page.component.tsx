import { Link, PageProps } from "gatsby"
import React, { FunctionComponent } from "react"
import { HomePageQuery } from "../../../../graphql-types"
import { assertDefined } from "../../../assertions"
import { BlogHeaderComponent } from "../../../blog/ui/blog-header/blog-header.component"
import { SEO } from "../../../seo"


export const HomePage: FunctionComponent<PageProps<HomePageQuery>> = ({
  data: {
    recentPosts: { edges: posts },
    site,
  },
}) => {
  assertDefined(site)
  assertDefined(site.siteMetadata)
  assertDefined(site.siteMetadata.title)
  const siteTitle = site.siteMetadata.title
  return (
    <div>
      <SEO title={siteTitle} />
      <BlogHeaderComponent />
      <section className="m-2 bg-white max-w-lg p-2">
        <h3 className="font-bold text-2xl">Recent Posts</h3>
        {posts.map(({ node: { fields, frontmatter } }) => {
          assertDefined(frontmatter)
          assertDefined(fields)
          const title = frontmatter.title || fields.slug
          return (
            <div key={fields.slug}>
              <h4 className="my-4">
                <Link
                  to={"/blog" + fields.slug}
                  className="text-2xl text-yellow-500"
                >
                  {title}
                </Link>
              </h4>
            </div>
          )
        })}
        <Link to="/blog">Go to the blog</Link>
        <p>
          This website is open source.{" "}
          <a
            href="https://github.com/radiatingstar/radiatingstar.com"
            rel="noopener noreferrer"
          >
            See the code on GitHub
          </a>
          .
        </p>
      </section>
    </div>
  )
}
