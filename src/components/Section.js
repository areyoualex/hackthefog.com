import React from 'react'
import styled from 'styled-components'

const Base = styled.section`
  max-width: 100%;
  box-sizing: border-box;
  margin-bottom: 3rem;
`
const Header = styled.h3`
  font-size: 2rem;
  font-family: 'Inter UI';
  text-transform: uppercase;
  margin: 2rem 0;
  padding: 0.2rem 6rem;
  background-color: #c8e8f5;
  color: #080b0e;
  width: fit-content;
  max-width: 100%;
  box-sizing: border-box;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  @media (max-width: 660px) {
    width: 100%;
    border-radius: 0;
  }
`
const Content = styled.div`
  max-width: 900px;
  padding: 0 1rem;
  box-sizing: border-box;
  margin: auto;
`

const Section = ({ title, children }) => (
  <Base>
    <Header>{title}</Header>
    <Content>{children}</Content>
  </Base>
)

export default Section
