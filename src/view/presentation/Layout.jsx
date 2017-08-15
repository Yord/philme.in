import React from 'react'
import styled from 'styled-components'

export let Layout = ({
  children: [header, posts, footer],
  className
}) => (
  <main className={className}>
    {header}
    {posts}
    {footer}
  </main>
)

Layout = styled(Layout)`
  a {
    color: rgba(0, 0, 0, 0.8);
    &:focus {
      text-decoration: none;
    }
    &:hover {
      text-decoration: none;
      header {
        padding-top: 5rem;
        padding-bottom: 1rem;
      }
      img {
        transform: rotate(-15deg);
      }
    }
  }
`
