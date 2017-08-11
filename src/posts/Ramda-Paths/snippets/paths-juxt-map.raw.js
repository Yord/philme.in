import { juxt, map, path } from 'ramda'

const paths = (paths, obj) => juxt(
  map(path, paths)
)(obj)

paths(selectors, obj) // [1, 2]
