import { PropTypes } from 'prop-types'
import React from 'react'
import { Image } from 'react-bootstrap'
import styled from 'styled-components'

/**
 * Profile portrait image.
 *
 * @version 1.0.0
 * @author [Philipp Wille](https://github.com/Yord)
*/
export let Portrait = ({ avatar, className }) => (
  <Image className={className} src={avatar} circle />
)

Portrait.propTypes = {
  /** Path to a profile image. */
  avatar: PropTypes.string
}

Portrait.defaultProps = {
  avatar: ''
}

Portrait = styled(Portrait)`
  height: 6rem;
  width: 6rem;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
`

export default Portrait
