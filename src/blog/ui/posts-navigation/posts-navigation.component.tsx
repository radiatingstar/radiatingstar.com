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
              {relation?.frontmatter?.title}
            </PostLink>
          )
        })}
    </Navigation>
  )
}

const Navigation = styled.nav`
  margin-bottom: 4rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 32rem) {
    margin-bottom: 8rem;
    padding: 2rem 4rem;
    flex-direction: row;
    justify-content: space-between;
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

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: ${({ rel }) => (rel === "next" ? "-12px" : "auto")};
    right: ${({ rel }) => (rel === "prev" ? "-12px" : "auto")};
    margin-top: -12px;

    display: block;
    width: 24px;
    height: 24px;

    border-radius: 100%;
    background: var(--yellow-500);
  }
`
