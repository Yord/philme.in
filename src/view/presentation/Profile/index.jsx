import React from 'react'
import { Media } from 'react-bootstrap'
import styled from 'styled-components'
import { Description } from 'view/presentation/Profile/Description'
import { Heading } from 'view/presentation/Profile/Heading'
import { Portrait } from 'view/presentation/Profile/Portrait'
const { Body, Left } = Media

export let Profile = ({ avatar, className, name, description }) => (
  <header className={className}>
    <Media>
      <Left>
        <Portrait avatar={avatar} />
      </Left>
      <Body>
        <Heading name={name} />
        <Description description={description} />
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
