import React from 'react'
import { BlogPost } from 'view/screen/BlogPost'

export const routes = {
  '/': () => ({}),
  '/on/:tagOrTitle': ({ tagOrTitle }) => ({ tagOrTitle })
}

export const screens = {
  '/': () => <BlogPost tagOrTitle='' />,
  '/on/:tagOrTitle': ({ tagOrTitle }) => <BlogPost tagOrTitle={tagOrTitle} />
}
