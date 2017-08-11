import React from 'react'
import { Button as BootstrapButton } from 'react-bootstrap'

export const OrderButton = ({
  children,
  onClick
}) => (
  <BootstrapButton bsStyle='link' onClick={onClick}>{children}</BootstrapButton>
)
