import React from 'react'
import { Media } from 'react-bootstrap'
import styled from 'styled-components'

export let Heading = ({ className, name }) => (
  <Media.Heading className={className}>{name}</Media.Heading>
)

Heading = styled(Heading)`
  font-size: 1.6rem;
  margin: 0;
  font-weight: normal;
`
