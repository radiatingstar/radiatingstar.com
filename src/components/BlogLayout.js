import React from 'react'
import styled from 'styled-components'

import { rhythm } from '../utils/typography'
import Navigation from '../components/Navigation'
import Header from './Header';

const Page = styled.div`
  background-color: silver;
  background-image: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.2) 50%,
    transparent 50%,
    transparent
  );
  background-size: 50px 50px;
  overflow: hidden;
`

const Content = styled.main`
  margin: ${rhythm(1.5)} auto;
  padding: ${rhythm(3)};
  max-width: ${rhythm(32)};
  background: white;
`

export default class BlogLayout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <Page>
        <Content>
          <Header/>
          <Navigation />
          {children}
          <footer>© {new Date().getFullYear()}</footer>
        </Content>
      </Page>
    )
  }
}
