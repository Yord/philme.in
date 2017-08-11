import { compose, lensProp } from 'ramda'
import { appPosts } from 'store/app/selectors'

export const postByTitle = title => compose(
  appPosts,
  lensProp(title)
)
