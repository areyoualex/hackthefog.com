import React from 'react'
import styled from 'styled-components'
import Icon from '@hackclub/icons'

import Layout from '../components/Layout'
import Front from '../components/Front'
import Section from '../components/Section'
import EmailForm from '../components/EmailForm'
import Footer from '../components/Footer'
import Button from '../components/Button'
import Article from '../components/Article'

const SocialButtons = styled.div`
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`
const SocialButton = styled(Button)`
  margin-top: 2rem;
`
const SocialButtonSpan = styled.span`
  margin-left: 1rem;
`

/* imgSrc={sfchronicleimg} */
export default () => (
  <Layout>
    <Front />
    <Section title="Hack the Fog in the Press">
      <Article
        href="https://www.sfchronicle.com/bayarea/article/Hack-the-Fog-makes-history-as-San-12729895.php"
        title="'Hack the Fog' makes history as San Francisco’s first high school hackathon"
        date="March 5, 2018"
        shortlink="sfchronicle.com"
        imgSrc={require('../../static/img/htf-1/sf-chronicle.jpg')}
      />
    </Section>
    <Section title="Stay updated.">
      <p>
        Submit your email below and get email updates when applications open in
        2019.
      </p>
      <EmailForm />
      <p>Don't check your emails? Follow us on social media!</p>
      <SocialButtons>
        <SocialButton href="https://www.instagram.com/hackthefog/">
          <Icon glyph="instagram" size={36} />
          <SocialButtonSpan>INSTAGRAM</SocialButtonSpan>
        </SocialButton>
        <SocialButton href="https://www.twitter.com/hackthefog/">
          <Icon glyph="twitter" size={36} />
          <SocialButtonSpan>TWITTER</SocialButtonSpan>
        </SocialButton>
        <SocialButton href="https://www.facebook.com/hackthefog/">
          <Icon glyph="facebook" size={36} />
          <SocialButtonSpan>FACEBOOK</SocialButtonSpan>
        </SocialButton>
      </SocialButtons>
    </Section>
    {/**
          <Section title="Past Sponsors">
          </Section>
        */}
    <Footer />
  </Layout>
)
