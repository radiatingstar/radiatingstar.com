import React from 'react'
import { Link } from 'gatsby'

export default function PreviousNextNav ({ next, previous }) {
  return (
    <>
      <hr/>
      <ul className="flex flex-wrap justify-between list-none p-0 m-0">
        <li>
          {previous && (
            <Link to={'/blog' + previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={'/blog' + next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </>
  )
}
