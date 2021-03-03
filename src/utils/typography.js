/**
 * This file is a remaining from the previously used Typography.js.
 * It's left to use the styles defined here in case they'll be needed
 * during the redesign.
 *
 * TODO: when you're done, remove it.
 */

import Typography from 'typography'
import gray from 'gray-percentage'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

const typography = new Typography({
  title: 'Radaiting Star Theme',
  baseFontSize: '16px',
  baseLineHeight: 1.75,
  scaleRatio: 2,
  headerFontFamily: ['Ubuntu', 'sans-serif'],
  bodyFontFamily: ['Lato', 'sans-serif'],
  bodyColor: 'hsla(0,0%,0%,0.9)',
  headerWeight: 900,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    return ({
      h2: {
        fontFamily: ['Ubuntu', 'sans-serif'].join(','),
      },
      blockquote: {
        ...scale(1 / 5),
        color: gray(41),
        fontStyle: 'italic',
        paddingLeft: rhythm(13 / 16),
        marginLeft: rhythm(-1),
        borderLeft: `${rhythm(3 / 16)} solid ${gray(10)}`,
      },
      'blockquote > :last-child': {
        marginBottom: 0,
      },
      'blockquote cite': {
        ...adjustFontSizeTo(options.baseFontSize),
        color: options.bodyColor,
        fontWeight: options.bodyWeight,
      },
      'blockquote cite:before': {
        content: '"— "',
      },
      ul: {
        listStyle: 'disc',
      },
      'ul,ol': {
        marginLeft: 0,
      },
      [MOBILE_MEDIA_QUERY]: {
        'ul,ol': {
          marginLeft: rhythm(1),
        },
        blockquote: {
          marginLeft: rhythm(-3 / 4),
          marginRight: 0,
          paddingLeft: rhythm(9 / 16),
        },
      },
      a: {
        textDecoration: 'none',
        color: '#ffa500'
      },
      'mark,ins': {
        background: '#007acc',
        color: 'white',
        padding: `${rhythm(1 / 16)} ${rhythm(1 / 8)}`,
        textDecoration: 'none',
      },
      'pre[class*="language-"]': {
        margin: `${rhythm(1)} 0 !important`
      }
    });
  },
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
