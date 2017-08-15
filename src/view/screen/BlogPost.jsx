import React from 'react'
import { BlogPost as BlogPostPresentation } from 'view/container/BlogPost'

export const BlogPost = ({
  tagOrTitle
}) => (
  <BlogPostPresentation tagOrTitle={tagOrTitle} />
)
