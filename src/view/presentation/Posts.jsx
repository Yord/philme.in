import { map } from 'ramda'
import React from 'react'

export const Posts = ({ children: postFn, posts }) => (
  <div>
    {map(postFn, posts)}
  </div>
)
