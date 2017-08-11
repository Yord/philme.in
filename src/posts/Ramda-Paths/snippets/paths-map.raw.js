import { map, path } from 'ramda'

const paths = (paths, obj) => map(
  p => path(p, obj),
  paths
)

paths(selectors, obj) // [1, 2]
