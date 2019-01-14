import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Nav = styled.nav`
  background: orange;
`

const LinksList = styled.ul`
  list-style: none;
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
