import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Faculty = styled.div `
  font-size: 20px;
  margin-bottom: 10px;
`
const Link = styled(NavLink) `
  text-decoration: none;
  color:white;
  font-family: Arial, Helvetica, sans-serif;
`

export default ({ id, name }) => (
  <Faculty key={id}>
    <Link to={`/faculty/${name}`}>
      {`${name}`}
    </Link>
  </Faculty>
)
