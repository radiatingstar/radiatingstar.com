import React from 'react'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'
import Navigation from '../components/Navigation'
import Header from './Header'

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
  margin: 0 auto;
  padding: ${rhythm(1.5)} ${rhythm(3)} 0;
  max-width: ${rhythm(32)};
  background: white;
`

const Footer = styled.footer`
  margin: 0 auto ${rhythm(1.5)};
  padding: ${rhythm(1.5)};
  max-width: ${rhythm(32)};
  text-align: center;
  background: #f9f9f9;
  border-top: 1px solid #ddd;
  color: #666;
`

export default class BlogLayout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <Page>
        <Header />
        <Navigation />
        <Content>{children}</Content>
        <Footer>★</Footer>
      </Page>
    )
  }
}
