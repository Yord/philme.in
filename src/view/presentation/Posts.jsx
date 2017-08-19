import { PropTypes } from 'prop-types'
import { map } from 'ramda'
import React from 'react'

/**
 * Layout for Posts.
 *
 * @version 1.0.0
 * @author [Philipp Wille](https://github.com/Yord)
*/
export const Posts = ({ children: postFn, posts }) => (
  <div>
    {map(postFn, posts)}
  </div>
)

Posts.propTypes = {
  /** Function that takes a post and returns a component. */
  children: PropTypes.func,
  /**
   * An array of posts that are transformed by the children function to
   * components and rendered inside the Posts component.
   */
  posts: PropTypes.array
}

Posts.defaultProps = {
  children: () => null,
  posts: []
}

export default Posts
