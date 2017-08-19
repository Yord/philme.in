import { PropTypes } from 'prop-types'
import React from 'react'
import styled from 'styled-components'

/**
 * Blog layout.
 *
 * @version 1.0.0
 * @author [Philipp Wille](https://github.com/Yord)
*/
export let Layout = ({
  children: [header, posts, footer],
  className
}) => (
  <main className={className}>
    {header}
    {posts}
    {footer}
  </main>
)

Layout.propTypes = {
  /**
   * Components passed into a Layout. Must be specified in the following order:
   * header, posts, footer.
   */
  children: PropTypes.arrayOf(PropTypes.node)
}

Layout.defaultProps = {
  children: [null, null, null]
}

Layout = styled(Layout)`
  a {
    color: rgba(0, 0, 0, 0.8);
    &:focus {
      text-decoration: none;
    }
    &:hover {
      text-decoration: none;
      header {
        padding-top: 5rem;
        padding-bottom: 1rem;
      }
      img {
        transform: rotate(-15deg);
      }
    }
  }
`

export default Layout
