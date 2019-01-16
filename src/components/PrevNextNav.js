import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { rhythm } from '../utils/typography'

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0 0 ${rhythm(.5)};
  margin: 0;
`

export default class PrevNextNav extends React.Component {
  render() {
    const previous = this.props.previous
    const next = this.props.next
    console.log(this.props)
    return (
      <React.Fragment>
        <hr />
        <List>
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
        </List>
      </React.Fragment>
    )
  }
}
