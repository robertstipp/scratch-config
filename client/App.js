import React from 'react'
import testImg from '../public/images/test.jpeg' 
import GlobalStyles from './assets/GlobalStyles'

import styled from 'styled-components'
export default function App () {
  return <div>
    <GlobalStyles />
    <img src={testImg} alt="" />
    <Heading>Hello</Heading>
  </div>
} 

const Heading = styled.h1`
  font-family: var(--primary-font);
`