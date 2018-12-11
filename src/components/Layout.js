import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { theme, GlobalStyle } from '../theme'
import data from '../data.json'
import fonts from '../../static/fonts.css'

const meta = tags =>
  tags.map((props, index) =>
    React.createElement('meta', { ...props, key: index })
  )

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
`

export default ({ children }) => {
  return (
    <>
      <Helmet defaultTitle={data.name}>
        <html lang="en" />
        <title children={data.name} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content={theme.colors.primary} />
        {meta([
          { name: 'description', content: data.description },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:site', content: data.socials[0].url },
          { name: 'twitter:domain', content: data.url },
          { name: 'twitter:title', content: data.name },
          { name: 'twitter:description', content: data.description },
          { name: 'twitter:image', content: data.img },
          { property: 'og:site_name', content: data.name },
          { property: 'og:title', content: data.name },
          { property: 'og:description', content: data.description },
          { property: 'og:image', content: data.img },
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: data.url },
        ])}
      </Helmet>
      <GlobalStyle />
      <Wrapper>{children}</Wrapper>
    </>
  )
}
