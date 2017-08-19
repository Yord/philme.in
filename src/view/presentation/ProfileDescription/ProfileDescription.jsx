import { PropTypes } from 'prop-types'
import React from 'react'
import styled from 'styled-components'

/**
 * A Description component to be used inside a Profile.
 *
 * @version 1.0.0
 * @author [Philipp Wille](https://github.com/Yord)
*/
export let Description = ({ children, className }) => (
  <p className={className}>{children}</p>
)

Description.propTypes = {
  /** Components passed into a Profile Description. */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

Description.defaultProps = {
  children: null
}

Description = styled(Description)`
  margin: 0;
  color: rgba(0, 0, 0, 0.45);
`

export default Description
