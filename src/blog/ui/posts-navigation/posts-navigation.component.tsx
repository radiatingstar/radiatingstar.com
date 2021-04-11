import { Link } from "gatsby"
import React, { VoidFunctionComponent } from "react"
import { SitePageContext } from "../../../../graphql-types"

export const PostsNavigation: VoidFunctionComponent<SitePageContext> = ({
  next,
  previous,
}) => {
  return (
    <nav>
      {([
        [next, "next"],
        [previous, "prev"],
      ] as const)
        .filter(([relation]) =>
          Boolean(relation?.fields && relation?.frontmatter)
        )
        .map(([relation, kind]) => {
          return (
            <Link to={"/blog" + relation?.fields?.slug} rel={kind} key={kind}>
              {relation?.frontmatter?.title}
            </Link>
          )
        })}
    </nav>
  )
}
