import React from 'react'
import styled from 'styled-components'

export let Description = ({ children, className }) => (
  <p className={className}>{children}</p>
)

Description = styled(Description)`
  margin: 0;
  color: rgba(0, 0, 0, 0.45);
`

export default Description
