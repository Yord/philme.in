import { PropTypes } from 'prop-types'
import React from 'react'
import styled from 'styled-components'

/**
 * Layout for a Post.
 *
 * @version 1.0.0
 * @author [Philipp Wille](https://github.com/Yord)
*/
export let Post = ({ children: [tags, title, content], className }) => (
  <article className={className}>
    {tags}
    {title}
    {content}
  </article>
)

Post.propTypes = {
  /**
   * Components passed into an OrderButton. Must be specified in the following
   * order: tags, title, content.
   */
  children: PropTypes.arrayOf(PropTypes.node)
}

Post.defaultProps = {
  children: null
}

Post = styled(Post)`
  a span {
    display: inline-block;
    font-size: 1.2rem;
    vertical-align: middle;
  }
  padding-bottom: 2rem;
  p a {
    color: #5cb85c !important;
  }
  p a:hover {
    text-decoration: underline;
  }
  h1, h2, p, pre code {
    width: 700px;
    margin: 0 auto;
  }
  h1, h2 {
    margin-top: 1rem;
    font-family: Roboto, 'Lucida Grande';
    font-weight: bold;
  }
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2.4rem;
  }
  p {
    font-size: 2rem;
    padding-top: 1.75rem;
    padding-bottom: 1.75rem;
    font-family: 'PT Serif', 'Open Sans';
    font-weight: 100;
    line-height: 3.5rem;
  }
  pre {
    margin-bottom: 0;
    padding-top: 2.75rem !important;
    padding-bottom: 2.75rem !important;
    background-color: #1d1f21;
    border: 0;
    border-radius: 0;
  }
  pre code {
    display: block;
  }
`

export default Post
