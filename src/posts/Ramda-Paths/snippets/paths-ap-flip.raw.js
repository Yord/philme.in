import { ap, flip, path } from 'ramda'

const paths = (paths, obj) => ap(
  [flip(path)(obj)],
  paths
)

paths(selections, obj) // [1, 2]
