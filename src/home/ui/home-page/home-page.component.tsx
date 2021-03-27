import { Link, PageProps } from "gatsby"
import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { HomePageQuery } from "../../../../graphql-types"
import { assertDefined } from "../../../assertions"
import { CoreLayout } from "../../../backbone"
import { SEO } from "../../../seo"

const ContentSection = styled.section`
  margin: 1rem;
  padding: 1rem;
  background: white;
`

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
    <CoreLayout>
      <SEO title={siteTitle} />
      <ContentSection>
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
      </ContentSection>
    </CoreLayout>
  )
}
