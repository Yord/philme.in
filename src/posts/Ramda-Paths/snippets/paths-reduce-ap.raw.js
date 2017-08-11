import { ap, path, reduce } from 'ramda'

const paths = (paths, obj) => reduce(
  ap,
  [path],
  [paths, [obj]]
)

paths(selectors, obj) // [1, 2]
