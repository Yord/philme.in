import { Link as RouterLink } from 'ratatosk-router/view/Link'
import React from 'react'
import styled from 'styled-components'

export let Title = ({
  children,
  className,
  date,
  id,
  Link = RouterLink
}) => (
  <h1 className={className}>
    <Link to={`/on/${id}`}>{children}</Link>
  </h1>
)

Title = styled(Title)`
  a {
    color: rgba(0, 0, 0, 0.8);
  }
`
