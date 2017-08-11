import { flip, map, o, path, uncurryN } from 'ramda'

const paths = flip(
  uncurryN(2)(
    o(map, flip(path))
  )
)

paths(selections)(obj) // [1, 2]
paths(selections, obj) // [1, 2]
