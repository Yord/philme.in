import { PropTypes } from 'prop-types'
import React from 'react'
import { Button as BootstrapButton } from 'react-bootstrap'

/**
 * Button for sorting tag cloud tags.
 *
 * @version 1.0.0
 * @author [Philipp Wille](https://github.com/Yord)
*/
export const OrderButton = ({
  children,
  onClick
}) => (
  <BootstrapButton bsStyle='link' onClick={onClick}>{children}</BootstrapButton>
)

OrderButton.propTypes = {
  /** Components passed into an OrderButton. */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

OrderButton.defaultProps = {
  children: null
}

export default OrderButton
