import palx from 'palx'
import { createGlobalStyle } from 'styled-components'

// TODO: have actual color palette
const palxColors = palx('#5eade0') // view all colors at https://palx.jxnblk.com/5eade0
const colors = {
  primary: '#5eade0',
  accentColor: palxColors.pink[7],
  ...palxColors,
}

const fonts = {
  primary: `"Fakt Soft Pro", -apple-system, sans-serif`, // TODO: decide on fonts
  bold: '',
}
const fontSizes = {
  heading: ['3.25rem', '4rem'], // format: [mobile (sm), desktop (lg)] sizing
  subheading: '1.5rem',
  details: '2rem',
}
const mediaQueries = {
  sm: '@media (min-width: 32em)',
  md: '@media (min-width: 48em)',
  lg: '@media (min-width: 64em)',
  xl: '@media (min-width: 80em)',
}

export const theme = {
  colors,
  fonts,
  fontSizes,
  mediaQueries,
}

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-weight: inherit;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-appearance: none;
    -moz-appearance: none;
    margin: 0;
  }
  html,
  body {
    min-height: 100%;
    min-width: 100%;
  }
  body {
    padding: 0;
    margin: 0;
    position: relative;
    height: 100%;
    max-height: 100%;
    min-height: 100vh;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    font-family: ${fonts.primary};
    background-color: #121C2A;
    color: #f1f1f1;
    font-size: 1.2rem;
  }
`
