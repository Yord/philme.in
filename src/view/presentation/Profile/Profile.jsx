import { PropTypes } from 'prop-types'
import React from 'react'
import { Media } from 'react-bootstrap'
import styled from 'styled-components'
const { Body, Left } = Media

/**
 * Layout for a Profile.
 *
 * @version 1.0.0
 * @author [Philipp Wille](https://github.com/Yord)
*/
export let Profile = ({
  children: [portrait, heading, description],
  className
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

Profile.propTypes = {
  /**
   * Components passed into a Profile. Must be specified in the following
   * order: portrait, heading, description.
   */
  children: PropTypes.arrayOf(PropTypes.node)
}

Profile.defaultProps = {
  children: [null, null, null]
}

Profile = styled(Profile)`
  width: 700px;
  margin: 0 auto;
  padding: 4rem 0 2rem 0;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
`

export default Profile
