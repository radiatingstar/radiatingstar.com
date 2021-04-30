import { Link } from "gatsby"
import React, { VoidFunctionComponent } from "react"
import styled from "styled-components"
import { SitePageContext } from "../../../../graphql-types"

export const PostsNavigation: VoidFunctionComponent<SitePageContext> = ({
  next,
  previous,
}) => {
  return (
    <Navigation>
      {([
        [next, "next"],
        [previous, "prev"],
      ] as const)
        .filter(([relation]) =>
          Boolean(relation?.fields && relation?.frontmatter)
        )
        .map(([relation, kind]) => {
          return (
            <PostLink
              to={"/blog" + relation?.fields?.slug}
              rel={kind}
              key={kind}
            >
              <RelationLabel>
                {kind === "next" ? "Next: " : "Previous: "}
              </RelationLabel>
              {relation?.frontmatter?.title}
            </PostLink>
          )
        })}
    </Navigation>
  )
}

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-bottom: 4rem;
  gap: 1rem;

  @media (min-width: 32rem) {
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem 4rem;
    margin-bottom: 8rem;
  }
`

const PostLink = styled(Link)`
  position: relative;
  padding: 1rem;

  background: var(--yellow-500);
  border-radius: 4px;

  color: var(--black-300);
  font-size: 1.2rem;
  text-decoration: none;

  &:hover,
  &:active,
  &:focus {
    background: var(--yellow-700);
  }
`

const RelationLabel = styled.span`
  color: var(--red-300);
`
