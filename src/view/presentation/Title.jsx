import { PropTypes } from 'prop-types'
import { Link as RouterLink } from 'ratatosk-router/view/Link'
import React from 'react'
import styled from 'styled-components'

/**
 * A Title component for Blog Posts.
 *
 * @version 1.0.0
 * @author [Philipp Wille](https://github.com/Yord)
*/
export let Title = ({
  children,
  className,
  id,
  Link = RouterLink
}) => (
  <h1 className={className}>
    <Link to={`/on/${id}`}>{children}</Link>
  </h1>
)

Title.propTypes = {
  /** Components passed into a BlogPost Title. */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  /**
   * An id used in the Title link.
   */
  id: PropTypes.string,
  /** A component used as a link for the Title. */
  Link: PropTypes.func
}

Title.defaultProps = {
  children: () => null,
  id: '',
  Link: RouterLink
}

Title = styled(Title)`
  a {
    color: rgba(0, 0, 0, 0.8);
  }
`

export default Title
