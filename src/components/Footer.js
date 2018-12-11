import React from 'react'
import styled from 'styled-components'

import IconLink from './IconLink'

const StyledFooter = styled.footer`
  height: 8rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #2a2a2a;
  padding: 2rem 4rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 540px) {
    flex-direction: column;
    align-items: flex-start;
    height: 10rem;
  }
`
const StyledIconLink = styled(IconLink)`
  font-size: 1.5rem;
  margin: 0.5rem 0.5rem;
  color: inherit;
`
const ViewSource = styled.a`
  align-self: flex-end;
  text-decoration: underline;
  color: #f1f1f1;
`

const Footer = () => (
  <StyledFooter>
    <div className="social">
      <small>SOCIAL</small>
      <div className="social-icons">
        <StyledIconLink
          href="https://www.instagram.com/hackthefog/"
          icon="instagram"
        />
        <StyledIconLink href="https://twitter.com/hackthefog" icon="twitter" />
        <StyledIconLink href="https://github.com/hackthefog" icon="github" />
        <StyledIconLink
          href="https://www.facebook.com/hackthefog/"
          icon="facebook"
        />
        <StyledIconLink
          href="mailto:contact@hackthefog.com"
          icon="email-fill"
        />
      </div>
    </div>
    <ViewSource
      href="https://github.com/hackthefog/hackthefog.com"
      children="View source"
    />
  </StyledFooter>
)

export default Footer
