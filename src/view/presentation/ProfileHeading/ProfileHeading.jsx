import { PropTypes } from 'prop-types'
import React from 'react'
import { Media } from 'react-bootstrap'
import styled from 'styled-components'

/**
 * A Heading component to be used inside a Profile.
 *
 * @version 1.0.0
 * @author [Philipp Wille](https://github.com/Yord)
*/
export let Heading = ({ children, className }) => (
  <Media.Heading className={className}>{children}</Media.Heading>
)

Heading.propTypes = {
  /** Components passed into a Profile Heading. */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

Heading.defaultProps = {
  children: null
}

Heading = styled(Heading)`
  font-size: 1.6rem;
  margin: 0;
  font-weight: normal;
`

export default Heading
