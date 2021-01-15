import React from 'react'
import styled from 'styled-components'

const Faculty = styled.div `
  font-size: 20px;
  margin-bottom: 10px;
`

export default ({ id, name }) => (
  <Faculty key={id} className="faculty">
    {`${name}`}
  </Faculty>
)
