import React from 'react'
import styled from 'styled-components'

export let Post = ({ children, className }) => (
  <article className={className}>{children}</article>
)

Post = styled(Post)`
  padding-bottom: 2rem;
  p a {
    color: #5cb85c !important;
  }
  p a:hover {
    text-decoration: underline;
  }
  h1, h2, p, pre code {
    width: 700px;
    margin: 0 auto;
  }
  h1, h2 {
    margin-top: 1rem;
    font-family: Roboto, 'Lucida Grande';
    font-weight: bold;
  }
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2.4rem;
  }
  p {
    font-size: 2rem;
    padding-top: 1.75rem;
    padding-bottom: 1.75rem;
    font-family: 'PT Serif', 'Open Sans';
    font-weight: 100;
    line-height: 3.5rem;
  }
  pre {
    margin-bottom: 0;
    padding-top: 2.75rem !important;
    padding-bottom: 2.75rem !important;
    background-color: #1d1f21;
    border: 0;
    border-radius: 0;
  }
  pre code {
    display: block;
  }
`
