import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'

const Nav = styled.nav`
  margin: ${rhythm(1.5)} -${rhythm(3.5)};
  padding: 1rem ${rhythm(3.5)};
  background: orange;
`

const LinksList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  li {margin: 0}
  a {color: hsla(0,0%,0%,0.9)}
`

export default class Navigation extends React.Component {
  render() {
    return (
      <Nav>
        <LinksList>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </LinksList>
      </Nav>
    )
  }
}
