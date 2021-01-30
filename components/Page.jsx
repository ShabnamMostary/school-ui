import React from 'react'
import styled from 'styled-components'

const Page = styled.div `
  margin: 60px auto 0;
  text-align: center;
  width: 60%;
  border:1px white solid;
  background-color:#0f7c90;
`

export default ({ children }) => (
  <Page>{children}</Page>
)
