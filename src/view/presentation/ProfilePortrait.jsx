import React from 'react'
import { Image } from 'react-bootstrap'
import styled from 'styled-components'

export let Portrait = ({ avatar, className }) => (
  <Image className={className} src={avatar} circle />
)

Portrait = styled(Portrait)`
  height: 6rem;
  width: 6rem;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
`
