import React from 'react'
import styled from 'styled-components'

import logo from '../img/brand/logo.png';
import collage from '../img/htf-1/front-collage.png';

const Base = styled.div`
  min-height: fit-content;
  height: 35rem;
  width: 100%;
  background-color: #2e6b99;
  background: url(${collage});
  background-size: auto 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  border-bottom: 1px solid #3b3b3b;

  @media (max-width: 540px) {
    font-size: 5vw;
  }
`
const Title = styled.h1`
  padding: 1rem 2rem;
  position: absolute;
  top: 0;
  left: 0rem;
  color: #d4e1f2;
  background-color: #1d1d1d88;
  border-bottom-right-radius: 25px;

  @media (max-width: 800px) {
    padding: 1rem 2rem;
    position: static;
    top: 0;
    left: 0;
    color: #d4e6ff;
    padding: 0;
    background: none;
  }
`
const Image = styled.img`
  height: 50%;
  margin: auto;
  display: block;

  @media (max-width: 800px) {
    order: -1;
  }
  @media (max-width: 540px) {
    height: 60vw;
  }
`
const Tagline = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 3.4rem;
  margin-bottom: 1rem;
  font-weight: lighter;

  @media (max-width: 540px) {
    font-size: 10vw;
  }
`
const MoreInfo = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 3rem;
  font-family: 'Inter UI';
`

const Front = () => (
  <Base>
    <Title>Hack the Fog</Title>
    <Image src={logo} />
    <Tagline>where coding is your superpower.</Tagline>
    <MoreInfo>
      <p>MARCH 2019</p>
      <p>APPLICATIONS OPENING SOON</p>
    </MoreInfo>
  </Base>
)

export default Front
