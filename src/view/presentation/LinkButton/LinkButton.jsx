import { PropTypes } from 'prop-types'
import React from 'react'
import { Button as BootstrapButton } from 'react-bootstrap'

/**
 * Button dispatching an onClick redux action.
 *
 * @version 1.0.0
 * @author [Philipp Wille](https://github.com/Yord)
*/
export const LinkButton = ({
  children,
  onClick
}) => (
  <BootstrapButton bsStyle='link' onClick={onClick}>{children}</BootstrapButton>
)

LinkButton.propTypes = {
  /** Components passed into a LinkButton. */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

LinkButton.defaultProps = {
  children: null
}

export default LinkButton
