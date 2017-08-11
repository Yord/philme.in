import { flip, map, path } from 'ramda'

const paths = (paths, obj) => map(
  flip(path)(obj),
  paths
)

paths(selectors, obj) // [1, 2]
