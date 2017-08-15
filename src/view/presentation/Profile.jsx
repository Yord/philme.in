import React from 'react'
import { Media } from 'react-bootstrap'
import styled from 'styled-components'
const { Body, Left } = Media

export let Profile = ({
  avatar,
  children: [portrait, heading, description],
  className,
  name /*,
  description */
}) => (
  <header className={className}>
    <Media>
      <Left>
        {portrait}
      </Left>
      <Body>
        {heading}
        {description}
      </Body>
    </Media>
  </header>
)

Profile = styled(Profile)`
  width: 700px;
  margin: 0 auto;
  padding: 4rem 0 2rem 0;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
`
