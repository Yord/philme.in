import React from 'react'
import BlogPostPresentation from 'view/container/BlogPost'
import BootstrapStyles from 'view/screen/BootstrapStyles'

export const BlogPost = ({
  tagOrTitle
}) => (
  <BootstrapStyles>
    <BlogPostPresentation tagOrTitle={tagOrTitle} />
  </BootstrapStyles>
)
