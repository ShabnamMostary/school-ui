import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Faculty = styled.div `
  font-size: 20px;
  margin-bottom: 10px;
`
const Link = styled(NavLink) `
  text-decoration: none;
`

export default ({ id, name }) => (
  <Faculty key={id} className="faculty">
    <Link to={`/faculty/${id}`}>
      {`${name}`}
    </Link>
  </Faculty>
)
