import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
  text-decoration: none;
`
const Base = styled.div`
  width: 80%;
  margin: 2rem auto;
  background-color: #c1d9e4;
  color: #404040;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  filter: drop-shadow(1px 1px 4px #000000);

  @media (max-width: 540px) {
    width: 100%;
  }
`
const Main = styled.div`
  box-sizing: border-box;
  padding: 1rem 1rem 0.5rem;
  width: 100%;

  @media (max-width: 540px) {
    display: block;
  }
`
const Title = styled.p`
  font-size: 2rem;
  font-weight: bold;
  width: 100%;
  font-family: 'Noto Serif SC';

  @media (max-width: 540px) {
    font-size: 7vw;
  }
`
const Date = styled.span`
  padding: 0;
  width: 100%;
  font-style: italic;
  background: none;
  color: #585858;
  @media (max-width: 540px) {
    margin: 1vw 0;
  }
`
const Shortlink = styled.span`
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  color: #c8c8c8;
  background-color: #4e4e4e;
  font-family: 'Inter UI';
  padding: 0.6rem 1rem;
  font-style: italic;
  font-size: 1.2rem;
  line-height: 1.2rem;
  text-decoration: underline;
  @media (max-width: 540px) {
    font-size: 4vw;
    line-height: 4vw;
  }
`

const Article = ({ alt, href, title, date, imgSrc, shortlink }) => (
  <Link href={href}>
    <Base>
      <Main>
        <Title>{title}</Title>
        <Date>{date}</Date>
      </Main>
      <img
        src={imgSrc}
        style={{ width: '100%' }}
        alt={alt}
      />
      <Shortlink>{shortlink}</Shortlink>
    </Base>
  </Link>
)

export default Article
