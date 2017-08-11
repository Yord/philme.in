import { ap, identity, o, of, path, uncurryN, useWith } from 'ramda'

const paths = useWith(
  uncurryN(2)(
    o(ap, ap([path]))
  ),
  [identity, of]
)

paths(selections)(obj) // [1, 2]
paths(selections, obj) // [1, 2]
