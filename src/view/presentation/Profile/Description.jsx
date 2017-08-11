import React from 'react'
import styled from 'styled-components'

export let Description = ({ className, description }) => (
  <p className={className}>{description}</p>
)

Description = styled(Description)`
  margin: 0;
  color: rgba(0, 0, 0, 0.45);
`
