import { juxt, map, o, path, uncurryN } from 'ramda'

const paths = uncurryN(2)(
  o(juxt, map(path))
)

paths(selectors, obj) // [1, 2]
paths(selectors)(obj) // [1, 2]
