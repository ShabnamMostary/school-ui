import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Link = styled(NavLink) `
  color:#fff;
  font-family: Arial, Helvetica, sans-serif;
`

export default () => (
  <Link to="/">&lt;&lt; Go Back</Link>
)
