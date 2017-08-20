import { PropTypes } from 'prop-types'
import { map } from 'ramda'
import { isNotEmpty } from 'ratatosk-ramda'
import React from 'react'
import { ButtonToolbar } from 'react-bootstrap'
import styled from 'styled-components'

/**
 * A Tags list component for Blog Posts.
 *
 * @version 1.0.0
 * @author [Philipp Wille](https://github.com/Yord)
*/
export let Tags = ({ children: tagFn, className, tags }) => (
  isNotEmpty(tags)
  ? (
    <ButtonToolbar className={className}>
      {map(tagFn, tags)}
    </ButtonToolbar>
  )
  : null
)

Tags.propTypes = {
  /** Function that takes a tag and returns a component. */
  children: PropTypes.func,
  /**
   * An array of tags that are transformed by the children function to
   * components and rendered inside the Tags component.
   */
  tags: PropTypes.array
}

Tags.defaultProps = {
  children: () => null,
  tags: []
}

Tags = styled(Tags)`
  margin: 3rem auto 0 auto !important;
  width: 700px;
`

export default Tags
