import React from 'react'
import styled from 'styled-components'

const Title = styled.div `
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 20px;
  padding-top:20px;
  font-family:Verdana, Geneva, sans-serif;
  color:white;
`

const Subtitle = styled.div `
  font-size: 20px;
  font-family:Verdana, Geneva, sans-serif;
  color:white;
  padding-bottom:10px;
`

export default () => (
  <>
    <Title>Meet the Faculty</Title>
    <Subtitle>A searchable list of all our faculty.</Subtitle>
  </>
)
