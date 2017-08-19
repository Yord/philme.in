import { PropTypes } from 'prop-types'
import { replace } from 'ramda'
import { history } from 'ratatosk-router/config/history'
import React from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'

/**
 * A Tag component to be used in a Tags list.
 *
 * @version 1.0.0
 * @author [Philipp Wille](https://github.com/Yord)
*/
export let Tag = ({ className, children: tag }) => (
  <Button className={className} bsStyle='warning' bsSize='xsmall' onClick={
    event => {
      event.preventDefault()
      history.push(`/on/${tag}`)
    }
  }>
    {replace('+', ' ', tag)}
  </Button>
)

Tag.propTypes = {
  /** Tag name used in the Tag title and link. */
  children: PropTypes.string
}

Tag.defaultProps = {
  children: ''
}

Tag = styled(Tag)`
  margin-right: 5px;
  margin-left: 0 !important;
`

export default Tag
